import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { useState } from "react"
import { Copy, Check, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeBlockProps {
  code: string
  language: string
  filename?: string
}

// Custom WY terminal theme for syntax highlighting
const wyTerminalTheme: { [key: string]: React.CSSProperties } = {
  'code[class*="language-"]': {
    color: '#FF9D00',
    background: 'none',
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: '0.875rem',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
  },
  'pre[class*="language-"]': {
    color: '#FF9D00',
    background: '#050505',
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: '0.875rem',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    padding: '1em',
    margin: '0',
    overflow: 'auto',
  },
  'comment': { color: '#664000' },
  'prolog': { color: '#664000' },
  'doctype': { color: '#664000' },
  'cdata': { color: '#664000' },
  'punctuation': { color: '#B36E00' },
  'property': { color: '#FFBD4A' },
  'tag': { color: '#FFBD4A' },
  'boolean': { color: '#FF6B6B' },
  'number': { color: '#FF6B6B' },
  'constant': { color: '#FFBD4A' },
  'symbol': { color: '#FFBD4A' },
  'deleted': { color: '#FF6B6B' },
  'selector': { color: '#FF9D00' },
  'attr-name': { color: '#FFBD4A' },
  'string': { color: '#7FFF7F' },
  'char': { color: '#7FFF7F' },
  'builtin': { color: '#FFBD4A' },
  'inserted': { color: '#7FFF7F' },
  'operator': { color: '#B36E00' },
  'entity': { color: '#FF9D00', cursor: 'help' },
  'url': { color: '#FF9D00' },
  'atrule': { color: '#FFBD4A' },
  'attr-value': { color: '#7FFF7F' },
  'keyword': { color: '#FF9D00', fontWeight: 'bold' },
  'function': { color: '#FFBD4A' },
  'class-name': { color: '#FFBD4A' },
  'regex': { color: '#FF9D00' },
  'important': { color: '#FF9D00', fontWeight: 'bold' },
  'variable': { color: '#FF9D00' },
}

function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative my-6 overflow-hidden border-2 border-border hover:border-primary/50 transition-all">
      {/* Header bar with filename and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-card/80 border-b-2 border-border">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="text-xs text-primary font-mono uppercase tracking-wider">
            {filename || language}
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 px-2 text-xs tracking-wider"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 mr-1 text-green-500" />
              COPIED
            </>
          ) : (
            <>
              <Copy className="h-3 w-3 mr-1" />
              COPY
            </>
          )}
        </Button>
      </div>

      {/* Code content */}
      <div className="bg-background">
        <SyntaxHighlighter
          language={language}
          style={wyTerminalTheme}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.8rem",
            background: "#050505",
          }}
          codeTagProps={{
            style: {
              fontFamily: "'Share Tech Mono', monospace",
              textShadow: "0 0 10px rgba(255, 157, 0, 0.3)",
            },
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeBlock

