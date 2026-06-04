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

## Contributors
- [Havea Crenata](mailto:havea.crenata@gmail.com)

## ☕ Support / Donate

If you find this project helpful and want to support it, you can donate via crypto :

| EVM                                                                                                     | Solana                                                                                                  |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/Bejibun-Framework/bejibun/blob/master/public/images/EVM.png?raw=true" width="150" /> | <img src="https://github.com/Bejibun-Framework/bejibun/blob/master/public/images/SOL.png?raw=true" width="150" /> |
| 0xdABe8750061410D35cE52EB2a418c8cB004788B3                                                              | GAnoyvy9p3QFyxikWDh9hA3fmSk2uiPLNWyQ579cckMn                                                            |

Or you can buy this `$BJBN (Bejibun)` tokens [here](https://pump.fun/coin/CQhbNnCGKfDaKXt8uE61i5DrBYJV7NPsCDD9vQgypump), beware of bots.