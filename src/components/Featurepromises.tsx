import React from 'react'
import { CheckCircle } from 'lucide-react'
// import { IconType } from 'react-icons' // or define your own type if using Lucide icons

interface FeaturepromisesProps {
  Icon: React.ElementType
  title: string
  description: string
  features: string[]
}

const Featurepromises: React.FC<FeaturepromisesProps> = ({
  Icon,
  title,
  description,
  features,
}) => {
  return (
    <div className="card-style p-6 space-y-5">
      <div>
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div className="text-base font-semibold">{title}</div>
        <div className="text-gray-500 dark:text-white/50 text-sm">{description}</div>
      </div>
      <div>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-500 dark:text-white/50">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Featurepromises
