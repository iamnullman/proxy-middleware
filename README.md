### proxy-middleware

This is a simple JavaScript code designed to determine the origin domain of incoming requests to a server and perform port forwarding to the specified port for that domain.

[![GitHub license](https://img.shields.io/github/license/iamnullman/proxy-middleware.svg)]
[![Stars](https://img.shields.io/github/stars/iamnullman/proxy-middleware.svg)]

## Getting Started:

1. First, install the dependencies:

```bash
npm install
# veya
pnpm install
# veya
yarn install
```

2. Configure the proxy settings in the proxy.js file. You can specify the mapping of origin domains to target ports in this file.

3. Run the proxy middleware:
    
```bash
node .
```


The proxy will now listen for incoming requests and forward them to the appropriate port based on the origin domain.

## Usage:

1. Clone the repository and configure the proxy as mentioned above.
2. Start the proxy middleware using "**node .**".
3 Incoming requests to the server will be routed to the specified target ports based on the origin domain.

## Contributing:

If you want to contribute to this project, you can follow these steps:

1. Fork this repository and run it on your own project.
2. Make your changes and add descriptive comments.
3. Create a pull request.

## License:

This project is licensed under the MIT License. For more information, see the LICENSE file.

## Contact:

For any questions or feedback, you can reach us at nullm4n@yandex.com or [![Discord](
https://img.shields.io/discord/975386456635883581?color=7289da&label=Discord&logo=discord&logoColor=white)](https://discord.gg/pS4YCmywQ7)


