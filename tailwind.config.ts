
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				neural: {
					green: 'hsl(147 100% 60%)',
					blue: 'hsl(222 84% 55%)',
					purple: 'hsl(280 100% 70%)',
					'green-dark': 'hsl(147 100% 45%)',
					'blue-dark': 'hsl(222 84% 50%)',
					'purple-dark': 'hsl(280 100% 55%)',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				info: 'hsl(var(--info))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'neural-pulse': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1) rotate(0deg)'
					},
					'50%': { 
						opacity: '0.8',
						transform: 'scale(1.05) rotate(2deg)'
					}
				},
				'data-flow': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100vw)' }
				},
				'infrastructure-glow': {
					'0%, 100%': {
						'box-shadow': '0 0 20px hsl(var(--primary) / 0.2)'
					},
					'50%': {
						'box-shadow': '0 0 40px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--secondary) / 0.2)'
					}
				},
				'terminal-cursor': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				},
				'slide-up-fade': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in-bounce': {
					'0%': {
						transform: 'scale(0.8)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.1)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
				'data-flow': 'data-flow 8s linear infinite',
				'infrastructure-glow': 'infrastructure-glow 4s ease-in-out infinite',
				'terminal-cursor': 'terminal-cursor 1s infinite',
				'slide-up-fade': 'slide-up-fade 0.6s ease-out',
				'scale-in-bounce': 'scale-in-bounce 0.8s ease-out',
				'float-subtle': 'neural-pulse 6s ease-in-out infinite',
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace']
			},
			letterSpacing: {
				'tighter': '-0.05em',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
