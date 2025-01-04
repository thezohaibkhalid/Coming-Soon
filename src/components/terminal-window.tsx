interface TerminalWindowProps {
  children: React.ReactNode
  title?: string
}

export function TerminalWindow({ children, title = "root@bitbuilders:~$" }: TerminalWindowProps) {
  return (
    <div className="bg-black/80 rounded-lg border border-green-500/20 backdrop-blur">
      <div className="flex items-center gap-2 p-2 border-b border-green-500/20">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="ml-2 text-sm text-green-500/60 font-mono">{title}</span>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}

