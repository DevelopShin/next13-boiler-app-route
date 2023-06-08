import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export function useStyledComponentsRegistry() {
	const [styledComponentsStyleSheet] = React.useState(
		() => new ServerStyleSheet(),
	);

	const styledComponentsFlushEffect = () => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		styledComponentsStyleSheet.instance.clearTag();
		return <>{styles}</>;
	};

	function StyledComponentsRegistry({
		children,
	}: {
		children: React.ReactNode;
	}) {
		return (
			<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
				{children as React.ReactElement}
			</StyleSheetManager>
		);
	}

	return [StyledComponentsRegistry, styledComponentsFlushEffect] as const;
}
