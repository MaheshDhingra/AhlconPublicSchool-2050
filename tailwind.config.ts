
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
				// Futuristic theme colors
				futuristic: {
					dark: '#0A0F25',
					light: '#F0F5FF',
					blue: '#2B64F6',
					purple: '#8B5CF6',
					teal: '#0BC5EA',
					neon: '#00F9FF',
					accent: '#FF3DFF'
				}
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
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(0, 249, 255, 0.5), 0 0 20px rgba(0, 249, 255, 0.2)'
					},
					'50%': { 
						boxShadow: '0 0 25px rgba(0, 249, 255, 0.8), 0 0 40px rgba(0, 249, 255, 0.4)'
					}
				},
				'meteor': {
					'0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
					'70%': { opacity: '1' },
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: '0'
					}
				},
                // New animations for 2025
                'text-shimmer': {
                  '0%': {
                    backgroundPosition: '0% 50%'
                  },
                  '100%': {
                    backgroundPosition: '100% 50%'
                  }
                },
                'zoom-in-out': {
                  '0%, 100%': {
                    transform: 'scale(1)'
                  },
                  '50%': {
                    transform: 'scale(1.05)'
                  }
                },
                'rotate-3d': {
                  '0%': {
                    transform: 'rotateY(0deg) rotateX(0deg)'
                  },
                  '50%': {
                    transform: 'rotateY(180deg) rotateX(10deg)'
                  },
                  '100%': {
                    transform: 'rotateY(360deg) rotateX(0deg)'
                  }
                },
                'ripple': {
                  '0%': {
                    transform: 'scale(0)',
                    opacity: '1'
                  },
                  '100%': {
                    transform: 'scale(2.5)',
                    opacity: '0'
                  }
                },
                'cyber-scan': {
                  '0%': {
                    transform: 'translateX(-100%) skewX(45deg)'
                  },
                  '100%': {
                    transform: 'translateX(100%) skewX(45deg)'
                  }
                },
                'bounce-subtle': {
                  '0%, 100%': {
                    transform: 'translateY(0)',
                    animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
                  },
                  '50%': {
                    transform: 'translateY(-5px)',
                    animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
                  }
                },
                'spin-slow': {
                  'from': {
                    transform: 'rotate(0deg)'
                  },
                  'to': {
                    transform: 'rotate(360deg)'
                  }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'meteor': 'meteor 5s linear infinite',
                // New animations for 2025
                'text-shimmer': 'text-shimmer 2s ease-in-out infinite alternate',
                'zoom-in-out': 'zoom-in-out 4s ease-in-out infinite',
                'rotate-3d': 'rotate-3d 8s ease-in-out infinite',
                'ripple': 'ripple 1s cubic-bezier(0, 0, 0.2, 1) forwards',
                'cyber-scan': 'cyber-scan 2s linear infinite',
                'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
                'spin-slow': 'spin-slow 10s linear infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': "url('/hero-bg.jpg')",
				'futuristic-grid': "url('/grid-pattern.svg')",
                'cyber-grid': "linear-gradient(rgba(0,249,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,249,255,0.1) 1px, transparent 1px)",
                'glow-sphere': "radial-gradient(circle, rgba(0,249,255,0.2) 0%, rgba(0,0,0,0) 70%)",
                'neo-brutalism': "linear-gradient(110deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 100%)"
			},
            backdropBlur: {
                'xs': '2px',
                '2xl': '40px',
                '3xl': '60px'
            },
            transitionDuration: {
                '1500': '1500ms',
                '2000': '2000ms',
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
