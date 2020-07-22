import ReactGA from 'react-ga'

export class GoogleAnalytics {
    static init() {
        if(process.env.ga_key) {
            console.log("GA INIT!")
            ReactGA.initialize(process.env.ga_key)
        }
    }

    static logPageView() {
        ReactGA.set({ page: window.location.pathname })
        ReactGA.pageview(window.location.pathname)
    }

    static logEvent = (category = '', action = '') => {
        if (category && action) {
            ReactGA.event({ category, action })
        }
    }

    static logException = (description = '', fatal = false) => {
        if (description) {
            ReactGA.exception({ description, fatal })
        }
    }
}