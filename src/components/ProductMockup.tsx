import { Bell, LayoutDashboard, Settings, type LucideIcon } from 'lucide-react'
import { accentHex } from '@/content/theme'
import type { ProductContent } from '@/content/products'

const SIDEBAR_ICONS: LucideIcon[] = [
  LayoutDashboard,
  Bell,
  Settings,
]

export function ProductMockup({ product }: { product: ProductContent }) {
  const hex = accentHex[product.accentColor]
  const sidebarItems = product.features.slice(0, 5).map((f) => f.title)
  const tiles = product.stats
    ? product.stats.slice(0, 3)
    : product.features.slice(0, 3).map((f) => ({ label: f.title, value: 'Incluído' }))
  const barItems = product.features.slice(0, 4)

  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
      style={{ backgroundColor: '#171B33' }}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 font-display text-xs font-medium text-paper/70">{product.name}</span>
        <div className="ml-auto flex items-center gap-3 text-paper/40">
          <Bell className="h-3.5 w-3.5" />
          <Settings className="h-3.5 w-3.5" />
          <span
            className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold text-ink"
            style={{ backgroundColor: hex[400] }}
          >
            D
          </span>
        </div>
      </div>

      <div className="flex">
        <div className="hidden w-36 shrink-0 flex-col gap-1 border-r border-white/10 p-3 sm:flex">
          {sidebarItems.map((label, index) => {
            const Icon = SIDEBAR_ICONS[index % SIDEBAR_ICONS.length]
            const active = index === 0
            return (
              <div
                key={label}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] font-medium"
                style={
                  active
                    ? { backgroundColor: `${hex[500]}26`, color: hex[400] }
                    : { color: 'rgba(250,248,243,0.45)' }
                }
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{label}</span>
              </div>
            )
          })}
        </div>

        <div className="min-w-0 flex-1 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-paper/40">Visão geral</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {tiles.map((tile) => (
              <div key={tile.label} className="rounded-lg border border-white/10 p-2.5" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                <p className="ledger-figure truncate text-sm font-semibold text-paper">{tile.value}</p>
                <p className="mt-0.5 truncate text-[9px] uppercase tracking-wide text-paper/40">{tile.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-lg border border-white/10 p-3" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
            <p className="text-[10px] font-medium uppercase tracking-wide text-paper/40">Funcionalidades ativas</p>
            <div className="mt-3 space-y-2.5">
              {barItems.map((feature, index) => (
                <div key={feature.title}>
                  <p className="mb-1 truncate text-[10px] text-paper/60">{feature.title}</p>
                  <div className="h-1.5 rounded-full bg-white/5">
                    <div
                      className="h-1.5 rounded-full"
                      style={{
                        width: `${72 + ((index * 7) % 22)}%`,
                        backgroundColor: hex[400],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
