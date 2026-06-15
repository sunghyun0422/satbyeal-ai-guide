const fs = require('fs');

function convertHtmlToReact(inputFile, outputFile) {
    const html = fs.readFileSync(inputFile, 'utf8');
    
    // Extract everything inside body
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
    if (!bodyMatch) {
        console.error("No body found in", inputFile);
        return;
    }
    let body = bodyMatch[1];
    
    // 1. Convert class to className
    body = body.replace(/class=/g, 'className=');
    
    // 2. Convert inline styles to objects
    body = body.replace(/style=\"([^\"]*)\"/g, (match, p1) => {
        let styleObj = {};
        p1.split(';').forEach(rule => {
            if (!rule.trim()) return;
            let [key, val] = rule.split(':');
            if (key && val) {
                key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                styleObj[key] = val.trim();
            }
        });
        return `style={${JSON.stringify(styleObj)}}`;
    });
    
    // 3. Convert self-closing tags
    body = body.replace(/<(img|input|br|hr)([^>]*?)>/g, (match, tag, attr) => {
        if (attr.endsWith('/')) return match;
        return `<${tag}${attr} />`;
    });
    
    // 4. Remove scripts inside body
    body = body.replace(/<script>[\s\S]*?<\/script>/g, '');
    
    // Fix HTML comments to JSX comments
    body = body.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
    
    // 5. Convert navigation URLs (Stitch specific data references)
    body = body.replace(/\{\{DATA:SCREEN:SCREEN_27\}\}/g, '/part1');
    body = body.replace(/\{\{DATA:SCREEN:SCREEN_16\}\}/g, '/part2');
    
    // Fix onclick to onClick
    body = body.replace(/onclick=\"([^\"]*)\"/g, (match, code) => {
        // Simple conversion, assuming code like "window.location.href='/part1'"
        return `onClick={() => { ${code} }}`;
    });
    
    // Add Link component usage if there are anchor tags. 
    // For now, simple anchor tags will work in Next.js but we can replace href if needed.
    
    // Wrap in a component
    const componentCode = `"use client";\n/* eslint-disable react/no-unescaped-entities */\nimport Link from 'next/link';\n\nexport default function Page() {\n  return (\n    <>\n${body}\n    </>\n  );\n}\n`;
    
    fs.writeFileSync(outputFile, componentCode);
    console.log("Written", outputFile);
}

convertHtmlToReact('stitch_home.html', 'app/page.tsx');

// Create directories if they don't exist
if (!fs.existsSync('app/part1')) fs.mkdirSync('app/part1');
if (!fs.existsSync('app/part2')) fs.mkdirSync('app/part2');

convertHtmlToReact('stitch_vol1.html', 'app/part1/page.tsx');
convertHtmlToReact('stitch_vol2.html', 'app/part2/page.tsx');
