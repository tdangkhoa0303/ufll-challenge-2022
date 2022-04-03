import Head from 'next/head';
import React from 'react';
import {Layout} from '../components';
import ThemeConfig from '../theme';
import GlobalStyles from '../theme/globalStyles';

const CustomApp = ({Component, pageProps}) => {
	return (
		<>
			<Head>
				<title>CLEAR MEN | UNBEATABLE | PROVOCATIVE | HIGH PERFORMANCE</title>
			</Head>
			<style global jsx>
				{`
                  @font-face {
                    font-family: 'SFUFutura';
                    src: url('fonts/SFUFuturaRegular.TTF');
                    font-weight: 400;
                  }

                  @font-face {
                    font-family: 'SFUFutura';
                    src: url('fonts/SFUFuturaBold.TTF');
                    font-weight: 700;
                  }

                  @font-face {
                    font-family: 'SFUFutura';
                    src: url('fonts/SFUFuturaExtraBold.TTF');
                    font-weight: 900;
                  }
				`}
			</style>
			<ThemeConfig>
				<GlobalStyles />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeConfig>
		</>
	)
}

export default CustomApp;

