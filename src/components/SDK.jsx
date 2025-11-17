import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

const snippets = {
  javascript: `import { WAuth } from '@wauth/js'\nconst auth = new WAuth({ projectId: 'proj_123' })\nawait auth.signInWithEmail({ email: 'dev@acme.com', otp: '123456' })`,
  react: `import { WAuthProvider, useWAuth } from '@wauth/react'\n\nexport default function App(){\n  return (\n    <WAuthProvider projectId=\"proj_123\">\n      <Login/>\n    </WAuthProvider>\n  )\n}\n\nfunction Login(){\n  const { signIn } = useWAuth()\n  return <button onClick={() => signIn('email')}>Sign in</button>\n}`,
  node: `import Fastify from 'fastify'\nimport { WAuth } from '@wauth/node'\n\nconst app = Fastify()\nconst wauth = new WAuth({ secret: process.env.WAUTH_SECRET })\n\napp.get('/me', async (req, reply) => {\n  const user = await wauth.verify(req.headers.authorization)\n  return { user }\n})`
}

export default function SDK(){
  return (
    <section id="sdk" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">SDK snippets</h2>
          <p className="mt-3 text-slate-600">Drop-in clients for your stack. Simple APIs, typed from day one.</p>
        </div>

        <motion.div initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white/80 backdrop-blur">
          <div className="flex gap-2 px-4 pt-3 pb-2 border-b border-slate-100 text-xs text-slate-500">
            <div className="h-3 w-3 rounded-full bg-red-400"/>
            <div className="h-3 w-3 rounded-full bg-yellow-400"/>
            <div className="h-3 w-3 rounded-full bg-green-400"/>
          </div>
          <div className="p-4">
            <Tabs.Root defaultValue="javascript">
              <Tabs.List className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-100 p-1 text-slate-600">
                <Tabs.Trigger value="javascript" className="px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-white data-[state=active]:text-slate-900 transition">
                  JavaScript
                </Tabs.Trigger>
                <Tabs.Trigger value="react" className="px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-white data-[state=active]:text-slate-900 transition">
                  React
                </Tabs.Trigger>
                <Tabs.Trigger value="node" className="px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-white data-[state=active]:text-slate-900 transition">
                  Node
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="javascript">
                <pre className="mt-4 overflow-x-auto text-sm bg-slate-900 text-slate-100 p-4 rounded-lg"><code>{snippets.javascript}</code></pre>
              </Tabs.Content>
              <Tabs.Content value="react">
                <pre className="mt-4 overflow-x-auto text-sm bg-slate-900 text-slate-100 p-4 rounded-lg"><code>{snippets.react}</code></pre>
              </Tabs.Content>
              <Tabs.Content value="node">
                <pre className="mt-4 overflow-x-auto text-sm bg-slate-900 text-slate-100 p-4 rounded-lg"><code>{snippets.node}</code></pre>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
