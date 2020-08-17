import React from "react"
import App, { AppContext, AppInitialProps } from "next/app"
import { END } from "redux-saga"
import { SagaStore, wrapper } from "../redux/configure-store"

class MyApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    const pageProps = {
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    }
    if (ctx.req) {
      console.log("Saga is executing on server, we will wait")
      ctx.store.dispatch(END)
      await (ctx.store as SagaStore).sagaTask.toPromise()
    }
    return {
      pageProps,
    }
  }

  public render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default wrapper.withRedux(MyApp)