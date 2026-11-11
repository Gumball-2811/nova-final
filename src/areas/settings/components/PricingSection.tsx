import { Section, Card, Row, LinkButton } from '@shared/ui'

const plans: { label: string; name: string; audience: string; price: string; period?: string; features: string[] }[] = [
  {
    label: 'Free',
    name: 'FREE',
    audience: 'Explore Nova',
    price: '₫0',
    features: [
      '5 3D generations per month.',
      'Standard quality.',
      'Limited GLB exports.',
      'Store up to 5 models.',
      'Watermark or commercial-use limits may apply under the applicable terms.',
    ],
  },
  {
    label: 'Personal',
    name: 'BASIC',
    audience: 'For everyday users',
    price: '₫99,000',
    period: ' / month',
    features: [
      '50 3D generations per month.',
      'Export GLB, OBJ, and STL.',
      'Standard quality.',
      'No watermark.',
      'Store up to 50 models.',
    ],
  },
  {
    label: 'Professional',
    name: 'PRO',
    audience: 'For freelancers and designers',
    price: '₫299,000',
    period: ' / month',
    features: [
      '200 3D generations per month.',
      'High quality.',
      'Batch processing.',
      'Priority GPU queue.',
      'Unlimited storage, subject to a fair-use policy.',
      'Commercial use under the product license.',
    ],
  },
]

const creditActions = [
  ['Standard 3D generation', '1'],
  ['High 3D generation', '3'],
  ['Ultra 3D generation', '5'],
  ['Texture generation', '1'],
  ['Retopology', '2'],
  ['Quality upscaling', '2'],
]

const creditPacks = [
  ['50 credits', '₫29,000'],
  ['150 credits', '₫79,000'],
  ['500 credits', '₫199,000'],
  ['1,500 credits', '₫499,000'],
]

export function PricingSection(): JSX.Element {
  return (
    <Section title="Pricing" subtitle="Choose a plan or contact us to get an activation key.">
      <div className="space-y-5">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
          {plans.map((plan) => (
            <article key={plan.name} className="rounded-xl bg-surface-300 border border-zinc-800 p-4 flex flex-col">
              <p className="text-[11px] text-zinc-500">{plan.label} · {plan.audience}</p>
              <h3 className="text-base font-bold text-zinc-100 mt-1">{plan.name}</h3>
              <p className="text-lg font-semibold text-accent-light mt-3">
                {plan.price}<span className="text-xs font-normal text-zinc-500">{plan.period ?? ''}</span>
              </p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-xs leading-5 text-zinc-400">
                    <span className="text-accent-light" aria-hidden="true">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section aria-label="Credit pricing" className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <Card title="Credit system" description="Illustrative credit cost for each operation.">
            {creditActions.map(([action, credits]) => (
              <Row key={action} label={action}>
                <span className="text-xs font-mono text-zinc-300">{credits} credits</span>
              </Row>
            ))}
          </Card>

          <Card title="Credit packs" description="Suggested top-up prices.">
            {creditPacks.map(([amount, price]) => (
              <Row key={amount} label={amount}>
                <span className="text-xs font-medium text-zinc-300">{price}</span>
              </Row>
            ))}
          </Card>
        </section>

        <p className="text-[11px] leading-5 text-zinc-500">
          Credits are illustrative internal units. Actual costs should be adjusted after benchmarking each model.
        </p>

        <Card title="Get an activation key" description="Message us on Zalo or Facebook for plan advice and an activation key.">
          <Row label="Zalo" description="0335280802">
            <LinkButton label="Contact on Zalo" href="https://zalo.me/0335280802" />
          </Row>
          <Row label="Facebook" description="Send a message to request an activation key.">
            <LinkButton label="Message" href="https://www.facebook.com/Dang.Binh.An.2808/" />
          </Row>
        </Card>
      </div>
    </Section>
  )
}
