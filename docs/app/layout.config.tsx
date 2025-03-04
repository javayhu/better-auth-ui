import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"
import { ExternalLink } from "lucide-react"

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
    githubUrl: "https://github.com/daveyplate/better-auth-ui",
    nav: {
        // can be JSX too!
        title: "@daveyplate/better-auth-ui",
    },
    links: [
        {
            url: "https://newtech.dev/auth/sign-in",
            text: "Demo",
            type: "button",
            icon: <ExternalLink />,
            external: true
        }
    ]
}
