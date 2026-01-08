import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BadgeDollarSign, BriefcaseBusinessIcon, MagnetIcon, MessageCircleWarning } from "lucide-react"

export default function KPISummary() {
  const kpiData = [
    {
      icon: BriefcaseBusinessIcon,
      color: "bg-red-400/40",
      title: "Total marketing spend",
      value: "$192,817",
      change: "+5.3%",
    },
    {
      icon: BadgeDollarSign,
      color: "bg-blue-400/40",
      title: "ROI",
      value: "270 %",
      change: "+8.1%",
    },
    {
      icon: MessageCircleWarning,
      color: "bg-green-400/40",
      title: "Conversion Rates",
      value: "4.5 %",
      change: "+0.9%",
    },
    {
      icon: MagnetIcon,
      color: "bg-purple-400/40",
      title: "Total Leads",
      value: "1,289",
      change: "+16.2%",
    },
  ]

  return (
    <Card className="w-11/12 border-0 shadow-2xl mt-8 bg-[var(--bg-primary)]">
      <CardHeader>
        <CardTitle className="text-[var(--foreground-primary)] font-bold text-xl capitalize tracking-wider">
          KPI Summary
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={index}
                className={`
                  relative bg-white/5 backdrop-blur-sm rounded-2xl p-6
                  border border-white/10
                  
                  /* بردر زیر در موبایل */
                  border-b-2 border-b-white/20
                  md:border-b-0
                  
                  /* بردر راست در دسکتاپ (به جز آخری) */
                  md:border-r 
                  ${index === 1 || index === 3 ? "md:border-r-2 md:border-r-white/20" : "md:border-r-white/10"}
                  ${index === 3 ? "md:border-r-0" : ""}
                  ${index === 1 ? "lg:border-r-white/10" : ""} /* اصلاح بردر وسطی در lg */
                `}
              >
                <div className={`flex items-center justify-center w-12 h-12 ${item.color} rounded-full mb-4`}>
                  <Icon className="w-6 h-6 text-white/90" />
                </div>
                <p className="text-[var(--foreground)] text-sm">{item.title}</p>
                <p className="text-[var(--foreground-primary)] text-3xl font-bold mt-2">{item.value}</p>
                <p className="text-green-500 text-sm mt-2">
                  {item.change} <span className="text-[var(--foreground)]">VS last month</span>
                </p>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}