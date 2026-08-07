import { Bell, LayoutDashboard, Settings, type LucideIcon } from 'lucide-react'

interface DashboardTile {
  label: string
  value: string
}

interface DashboardMockupProps {
  title: string
  accent: string
  sidebarItems: string[]
  sidebarIcons: LucideIcon[]
  tiles: DashboardTile[]
  quickActions?: { label: string; icon: LucideIcon }[]
  barItems: string[]
  imageSrc?: string
  className?: string
}

export function DashboardMockup({
  title,
  accent,
  sidebarItems,
  sidebarIcons,
  tiles,
  quickActions,
  barItems,
  imageSrc,
  className = '',
}: DashboardMockupProps) {
  const alt = `${title}: visão geral do painel`

  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/25 ${className}`} style={{ backgroundColor: '#171B33' }}>
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-400/70" />
        <span className="size-2.5 rounded-full bg-yellow-400/70" />
        <span className="size-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 font-display text-xs font-medium text-paper/70">{title}</span>
        <div className="ml-auto flex items-center gap-3 text-paper/40">
          <Bell className="size-3.5" />
          <Settings className="size-3.5" />
          <span
            className="flex size-5 items-center justify-center rounded-full text-[10px] font-semibold text-ink"
            style={{ backgroundColor: accent }}
          >
            D
          </span>
        </div>
      </div>

      <div className="flex">
        <div className={imageSrc ? 'hidden' : 'hidden w-36 shrink-0 flex-col gap-1 border-r border-white/10 p-3 sm:flex'}>
          {sidebarItems.map((label, index) => {
            const Icon = sidebarIcons[index % sidebarIcons.length] ?? LayoutDashboard
            const active = index === 0
            return (
              <div
                key={label}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] font-medium"
                style={active ? { backgroundColor: `${accent}26`, color: accent } : { color: 'rgba(250,248,243,0.45)' }}
              >
                <Icon className="size-3.5 shrink-0" />
                <span className="truncate">{label}</span>
              </div>
            )
          })}
        </div>

        <div className={imageSrc ? 'min-w-0 flex-1 p-2 sm:p-3' : 'min-w-0 flex-1 p-4'}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={alt}
              className="max-h-[30rem] w-full rounded-lg border border-white/10 bg-white object-contain"
            />
          ) : (
            <>
              <p className="text-xs font-semibold uppercase text-paper/40">Visão geral</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {tiles.map((tile) => (
                  <div
                    key={tile.label}
                    className="rounded-lg border border-white/10 p-2.5"
                    style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                  >
                    <p className="ledger-figure truncate text-sm font-semibold text-paper">{tile.value}</p>
                    <p className="mt-0.5 truncate text-[9px] uppercase text-paper/40">{tile.label}</p>
                  </div>
                ))}
              </div>

              {quickActions && (
                <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
                  {quickActions.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-1 rounded-lg border border-white/10 py-2"
                      style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                    >
                      <Icon className="size-3.5" style={{ color: accent }} />
                      <span className="hidden truncate text-[8px] text-paper/40 sm:block">{label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 rounded-lg border border-white/10 p-3" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                <p className="text-[10px] font-medium uppercase text-paper/40">Funcionalidades ativas</p>
                <div className="mt-3 flex flex-col gap-2.5">
                  {barItems.map((label, index) => (
                    <div key={label}>
                      <p className="mb-1 truncate text-[10px] text-paper/60">{label}</p>
                      <div className="h-1.5 rounded-full bg-white/5">
                        <div
                          className="h-1.5 rounded-full"
                          style={{ width: `${72 + ((index * 7) % 22)}%`, backgroundColor: accent }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
