/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			onSurface: "rgb(var(--color-on-surface))",
			onSurfaceVariant: 'rgb(var(--color-on-surface-variant))',
			primary: 'rgb(var(--color-primary))',
			'primary-hover': 'rgb(var(--color-primary-hover))',
			onPrimary: 'rgb(var(--color-on-primary))',
			surface: 'rgb(var( --color-surface))',
			"surface-variant": 'rgb(var(--color-surface-variant))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  		
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'gray'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			'border-soft': 'rgb(var(--border-soft))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
		
		
  		},
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addComponents, theme}) {
      addComponents({
        '.bg-primary': {
          backgroundColor: `rgb(var(--color-primary))`,
          '&:hover': {
            backgroundColor: `rgb(var(--color-primary-hover))`,
          },
        },
		'.paragraph-large-primary': {
			fontWeight: theme('fontWeight.normal'), 
			fontSize: theme('fontSize.lg'),  
			color: `rgb(var(--color-on-surface))`      
		  },
		  '.paragraph-large-secondary': {
			fontWeight: theme('fontWeight.normal'), 
			fontSize: theme('fontSize.lg'),  
			color: `rgb(var(--color-on-surface-variant))`      
		  },
		'.paragraph-medium-primary': {
			fontWeight: theme('fontWeight.normal'), 
			fontSize: theme('fontSize.base'),  
			color: `rgb(var(--color-on-surface))`      
		  },
		  '.paragraph-medium-secondary': {
			fontWeight: theme('fontWeight.normal'), 
			fontSize: theme('fontSize.base'),  
			color: `rgb(var(--color-on-surface-variant))`      
		  },
		  '.paragraph-small-primary': {
			fontWeight: theme('fontWeight.normal'), 
			fontSize: theme('fontSize.sm'),  
			color: `rgb(var(--color-on-surface))`      
		  },
		  '.paragraph-small-secondary': {
			fontWeight: theme('fontWeight.normal'), 
			fontSize: theme('fontSize.sm'),  
			color: `rgb(var(--color-on-surface-variant))`      
		  },
		  '.title-large': {
			fontWeight: theme('fontWeight.bold'), 
			fontSize: theme('fontSize.4xl'),  
			color: `rgb(var(--color-on-surface))`      
		  },
		  '.title-medium': {
			fontWeight: theme('fontWeight.semibold'), 
			fontSize: theme('fontSize.3xl'),  
			color: `rgb(var(--color-on-surface))`      
		  },
		  '.title-small': {
			fontWeight: theme('fontWeight.semibold'), 
			fontSize: theme('fontSize.2xl'),  
			color: `rgb(var(--color-on-surface))`      
		  },
		  '.title-xsmall': {
			fontWeight: theme('fontWeight.semibold'), 
			fontSize: theme('fontSize.lg'),  
			color: `rgb(var(--color-on-surface))`      
		  },
		  
      })
    },
  ],
}

