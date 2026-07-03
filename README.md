<div align="center">

<img src="https://github.com/Bejibun-Framework/bejibun/blob/master/public/images/bejibun.png?raw=true" width="150" alt="Bejibun" />

![GitHub top language](https://img.shields.io/github/languages/top/Bejibun-Framework/bejibun-cors)
![NPM Downloads](https://img.shields.io/npm/d18m/%40bejibun%2Fcors)
![GitHub issues](https://img.shields.io/github/issues/Bejibun-Framework/bejibun-cors)
![GitHub](https://img.shields.io/github/license/Bejibun-Framework/bejibun-cors)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/Bejibun-Framework/bejibun-cors?display_name=tag&include_prereleases)

</div>

# Cors for Bejibun
Cors for Bejibun Framework.

## Usage

### Installation
Install the package.

```bash
# Using Bun
bun add @bejibun/cors

# Using Bejibun
bun ace install @bejibun/cors
```

### Configuration
The configuration file automatically executed if you are using `ace`.

Or

Add `cors.ts` inside config directory on your project if doesn't exist.

```bash
config/cors.ts
```

```ts
const config: Record<string, any> = {
    allowedHeaders: "*",
    credentials: false,
    exposedHeaders: [],
    maxAge: 86400,
    methods: "*",
    origin: "*"
};

export default config;
```

### How to Use
How to use the package.

```ts
import Cors from "@bejibun/cors";

return Response.json({...}, {
    headers: {
        ...Cors.init
    }
});

// OR

return Response.json({...}, {
    headers: Cors.init
});
```

## ☕ Support / Donate

If you find this project helpful and want to support it:

[![Donate](https://img.shields.io/badge/Donate-Support%20Me-orange?style=for-the-badge)](https://donate.bejibun.com)

Or you can buy this `$BJBN (Bejibun)` tokens [here](https://pump.fun/coin/CQhbNnCGKfDaKXt8uE61i5DrBYJV7NPsCDD9vQgypump).