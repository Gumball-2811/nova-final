import { useEffect, useState } from 'react'
import { Section, Card, Row, LinkButton } from '@shared/ui'

export function AboutSection(): JSX.Element {
  const [version, setVersion] = useState<string>('')

  useEffect(() => {
    window.electron.app.info().then(({ version }) => setVersion(version))
  }, [])

  return (
    <Section title="About" subtitle="Thông tin ứng dụng Nova.">
      <Card>
        <Row label="Nova" description="Ứng dụng tạo mô hình 3D.">
          <span className="text-xs font-mono text-zinc-400">{version ? `v${version}` : '—'}</span>
        </Row>
        <Row label="Tài liệu hướng dẫn" description="Hướng dẫn sử dụng và tài liệu API.">
          <LinkButton label="Mở" href="https://modly3d.app" />
        </Row>
      </Card>
    </Section>
  )
}
