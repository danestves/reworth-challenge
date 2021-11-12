# ReWorth Coding Challenge: fullstack

![Build](https://github.com/danestves/reworth-challenge/workflows/Build/badge.svg?branch=master&event=push)

> Little coding challenge for Reworth hiring process.
> Involves React components and API integration tasks.

✨ [Click to see the Demo live on Vercel](https://reworth-challenge.vercel.app/) 👉 [https://reworth-challenge.vercel.app/](https://reworth-challenge.vercel.app/)

![Demo](https://github.com/danestves/reworth-challenge/blob/main/docs/demo.gif?raw=true)

## Summary

The [original project](https://github.com/reworthrewards/frontend-challenge) was updated with the latest versions of all packages, i have deleted all the old files and added the new ones.

Also I added TypeScript to the mix and added a few new features.

The query to the REST API is made it with [SWR](https://swr.vercel.app/) and the data is fetched from the API with the use of the `useSWR` hook.

In addition to this i created a `useRequest` hook that use `axios` under the hood.

## Style

For the styling part I use TailwindCSS with the Just-In-Time (JIT) mode.

## Routing

For the routing system i use [@reach/router](https://reach.tech/router/) due that is an small library that allows you to create a declarative router. I use it to persist the `limit` in the URL when the user changes the limit of offers per page.

## Parcel v2

At the beginning i saw that the repo was using [Parcel](https://parceljs.org/) v1. But with the latest release of Parcel v2 i decided to use it. It brings a lot of new features and it is a great way to build a web app.

Also it comes with SWC that is a Rust compiler for JavaScript/TypeScript, giving a great performance boost.

## Technologies Used

- ReactJS
- Reach Router
- Parcel v2
- TailwindCSS
- SWR
- Axios
- TypeScript
