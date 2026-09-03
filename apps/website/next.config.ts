import * as path from "node:path"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "..", ".."),
  reactCompiler: true,
  transpilePackages: ["@template-nextjs/db"],
  turbopack: {
    root: path.join(__dirname, "..", ".."),
  },
}

export default nextConfig
