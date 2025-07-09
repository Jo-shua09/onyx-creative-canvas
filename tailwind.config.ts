
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				portfolio: {
					'dark': '#321B15',
					'teal': '#278783',
					'cream': '#FFEBD0'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(60px) scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'slide-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-60px) rotate(-5deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0) rotate(0deg)'
					}
				},
				'slide-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(60px) rotate(5deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0) rotate(0deg)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8) rotate(-10deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) rotate(0deg)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'33%': {
						transform: 'translateY(-20px) rotate(2deg)'
					},
					'66%': {
						transform: 'translateY(-10px) rotate(-1deg)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(39, 135, 131, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 60px rgba(39, 135, 131, 0.8), 0 0 100px rgba(255, 235, 208, 0.3)'
					}
				},
				'pulse-ring': {
					'0%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(1.5)',
						opacity: '0'
					}
				},
				'spin-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'wiggle': {
					'0%, 7%, 100%': {
						transform: 'rotate(0deg)'
					},
					'15%': {
						transform: 'rotate(5deg)'
					},
					'20%': {
						transform: 'rotate(-5deg)'
					},
					'25%': {
						transform: 'rotate(3deg)'
					},
					'30%': {
						transform: 'rotate(-3deg)'
					},
					'35%': {
						transform: 'rotate(1deg)'
					},
					'40%': {
						transform: 'rotate(-1deg)'
					}
				},
				'bounce-gentle': {
					'0%, 20%, 53%, 80%, 100%': {
						transform: 'translate3d(0,0,0)'
					},
					'40%, 43%': {
						transform: 'translate3d(0, -15px, 0)'
					},
					'70%': {
						transform: 'translate3d(0, -8px, 0)'
					},
					'90%': {
						transform: 'translate3d(0, -3px, 0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 1s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-left': 'slide-left 1s ease-out',
				'slide-right': 'slide-right 1s ease-out',
				'scale-in': 'scale-in 0.8s ease-out',
				'float': 'float 8s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'pulse-ring': 'pulse-ring 2s ease-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'wiggle': 'wiggle 2s ease-in-out infinite',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
