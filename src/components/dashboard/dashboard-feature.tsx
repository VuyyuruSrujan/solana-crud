// import { AppHero } from '@/components/app-hero'

// const links: { label: string; href: string }[] = [
//   { label: 'Solana Docs', href: 'https://docs.solana.com/' },
//   { label: 'Solana Faucet', href: 'https://faucet.solana.com/' },
//   { label: 'Solana Cookbook', href: 'https://solana.com/developers/cookbook/' },
//   { label: 'Solana Stack Overflow', href: 'https://solana.stackexchange.com/' },
//   { label: 'Solana Developers GitHub', href: 'https://github.com/solana-developers/' },
// ]

// export default function DashboardFeature() {
//   return (
//     <div>
//       <AppHero title="gm" subtitle="Say hi to your new Solana app." />
//       <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
//         <div className="space-y-2">
//           <p>Here are some helpful links to get you started.</p>
//           {links.map((link, index) => (
//             <div key={index}>
//               <a
//                 href={link.href}
//                 className="hover:text-gray-500 dark:hover:text-gray-300"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {link.label}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


import { AppHero } from '@/components/app-hero'
import { Sparkles, BookOpen, Wallet } from 'lucide-react'

const links: { label: string; href: string }[] = [
  { label: 'Solana Docs', href: 'https://docs.solana.com/' },
  { label: 'Solana Faucet', href: 'https://faucet.solana.com/' },
  { label: 'Solana Cookbook', href: 'https://solana.com/developers/cookbook/' },
  { label: 'Solana Stack Overflow', href: 'https://solana.stackexchange.com/' },
  { label: 'Solana Dev GitHub', href: 'https://github.com/solana-developers/' },
]

export default function DashboardFeature() {
  return (
    <div className="animate-fade-in">
      <AppHero title="Solana Journal" subtitle="Write. Reflect. Record – On-Chain." />

      <div className="max-w-5xl mx-auto py-10 px-6 text-center space-y-10">
        {/* Highlight Features */}
        <div className="grid md:grid-cols-3 gap-6 text-base-content">
          <FeatureCard
            icon={<BookOpen className="w-10 h-10 text-primary" />}
            title="Create Journal"
            description="Easily create personal journal entries stored securely on the Solana blockchain."
          />
          <FeatureCard
            icon={<Wallet className="w-10 h-10 text-primary" />}
            title="Connect Wallet"
            description="Use your Solana wallet to authenticate, manage, and sign entries seamlessly."
          />
          <FeatureCard
            icon={<Sparkles className="w-10 h-10 text-primary" />}
            title="Update & Delete"
            description="Modify or delete your journal entries anytime—your data, your control."
          />
        </div>

        {/* Developer Resources */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Developer Resources</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block p-4 rounded-lg border border-base-300 hover:bg-base-200 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: JSX.Element
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-xl shadow-md bg-base-100 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center space-y-4">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-base-content">{description}</p>
      </div>
    </div>
  )
}
