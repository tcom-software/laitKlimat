import { up } from './breakpoints';

export const values = {
	min: 24,
};
export const keys = Object.keys(values);

export function generateAll() {
	const o = [];
	for (const [key, value] of Object.entries(values)) {
		o[up(key)] = generate(value);
	}
	return o;
}

export function generate(columns) {
	if (process.env.NODE_ENV === 'development') {
		const offset = 0;
		const offsetUnit = 'rem';
		const lineThickness = '1px';
		const gutter = '0rem';
		const color = 'rgba(255,0,0,0.1)';

		const repeatingWidth = `calc(100% / ${columns})`;
		const columnWidth = `calc((100% / ${columns}) - ${gutter})`;
		const backgroundWidth = `calc(100% + ${gutter})`;
		const backgroundColumns = `repeating-linear-gradient(
      to right,
      ${color},
      ${color} ${lineThickness},
      transparent ${lineThickness},
      transparent calc(${columnWidth} - ${lineThickness}),
      ${color} calc(${columnWidth} - ${lineThickness}),
      ${color} ${columnWidth},
      transparent ${columnWidth},
      transparent ${repeatingWidth}
    )`;

		return {
			'&::before': {
				content: '""',
				position: 'fixed',
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				margin: {
					right: 'auto',
					left: 'auto',
				},
				width: `calc(100% - ${2 * offset}${offsetUnit})`,
				'min-height': '100vh',
				'background-image': backgroundColumns,
				'background-size': `${backgroundWidth} 100%`,
				'z-index': 10000,
				'pointer-events': 'none',
			},
		};
	} else {
		return '';
	}
}
