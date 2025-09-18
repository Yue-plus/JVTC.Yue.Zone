# SUI

:::tip
SUI 是一个高性能、安全且去中心化的区块链平台，由 Mysten Labs 开发。
它采用独特的并行交易处理机制，支持智能合约开发，并具有出色的可扩展性。
SUI 使用 Move 编程语言进行智能合约开发，特别适合处理数字资产和 Web3 应用程序。

[官方网站](https://sui.io/)
| [官方文档](https://docs.sui.io/)
| [Move Book](https://move-book.com/)
| [Polymedia Explorer](https://explorer.polymedia.app/)
:::

## 安装

参考 [SUI 安装](https://docs.sui.io/guides/developer/getting-started/sui-install)

### 设置本地网络账户

```text heighline={1,3,5,7,9}
PS C:\Users\YuePlus\Desktop> sui client
Config file ["C:\\Users\\YuePlus\\.sui\\sui_config\\client.yaml"] doesn't exist, do you want to connect to a Sui Full node server [y/N]?
> y
Sui Full node server URL (Defaults to Sui Testnet if not specified) :
> http://127.0.0.1:9000
Environment alias for [http://127.0.0.1:9000] :
> localnet
Select key scheme to generate keypair (0 for ed25519, 1 for secp256k1, 2: for secp256r1):
> 0
Generated new keypair and alias for address with scheme "ed25519" [beautiful-hiddenite: 0x8a6e22d2e910587406f0ebaa110df3279ef9e8aca12f181f8774e5a3044cfe03]
Secret Recovery Phrase : [_____ ____ ____ ___ ____ _____ ____ ____ ____ ___ ____ ____ ]
Client for interacting with the Sui network
```

检查当前环境：

```text
PS C:\Users\YuePlus\Desktop> sui client envs
╭──────────┬───────────────────────┬────────╮
│ alias    │ url                   │ active │
├──────────┼───────────────────────┼────────┤
│ localnet │ http://127.0.0.1:9000 │ *      │
╰──────────┴───────────────────────┴────────╯
PS C:\Users\YuePlus\Desktop> sui client active-env
localnet
```

检查当前活动地址：

```
sui client active-address
```

该命令将输出帐户地址，以 `0x` 开头，后跟 64 个字符。

### 启动本地网络

```powershell title="PowerShell"
$env:RUST_LOG="off,sui_node=info"; sui start --with-faucet --force-regenesis
```

在以上命令中：

- `$env:`
  用于在 PowerShell 中设置临时环境变量（仅在当前会话有效）。
- `RUST_LOG="off,sui_node=info"`
  标志来设置特定的日志记录，这将关闭除 `sui-node` 之外的所有组件的日志记录。
  如果需要查看更详细的日志，可以从命令中删除这部分。
- `;` 用于在同一行中分隔多个命令。
- `sui start` 用于启动 SUI 节点。
- `--with-faucet` 开启水龙头服务。
- `--force-regenesis` 强制重新生成创世块。

<details>
<summary>`sui start --help`</summary>

```text
--network.config <CONFIG_DIR>  
    用于存储网络配置、节点数据库、密钥库的配置目录。  
    `sui genesis -f --with-faucet` 会生成一个可用于启动该进程的创世配置。  
    请谨慎使用 `-f` 参数，因为它会覆盖已有的配置目录。  
    我们可以使用任意由 `sui genesis` 生成的配置目录。  

--force-regenesis  
    每次使用该参数时都会创建一个新的创世块，并且运行之间不会保留状态。  
    仅在你希望每次运行时都从零开始启动网络时使用此参数。  

--with-graphql[=<WITH_GRAPHQL>]  
    在本地主机启动一个 GraphQL 服务器，默认端口为 127.0.0.1:9125，  
    或者在指定的端口启动。  
    当提供特定端口时，请使用等号连接参数和值，例如：`--with-graphql=6125`。  
    注意：GraphQL 需要有正在运行的 Indexer。  

--with-faucet[=<WITH_FAUCET>]  
    启动一个水龙头服务（faucet），默认地址和端口为 127.0.0.1:9123，  
    或者在指定的端口启动。  
    当提供特定端口时，请使用等号连接参数和值，例如：`--with-faucet=6123`。  

--with-indexer[=<WITH_INDEXER>]  
    启动一个 Indexer，默认地址和端口为 0.0.0.0:9124，  
    或者在指定的端口启动。  
    当提供特定端口时，请使用等号连接参数和值，例如：`--with-indexer=6124`。  
    Indexer 会以写入模式和读取模式启动。  

--fullnode-rpc-port <FULLNODE_RPC_PORT>  
    启动 Fullnode RPC 服务器的端口。默认端口是 9000。  

--pg-port <PG_PORT>  
    Indexer 使用的 Postgres 数据库端口。默认端口是 5432。  

--pg-host <PG_HOST>  
    Indexer 使用的 Postgres 数据库主机名。默认主机是 localhost。  

--pg-db-name <PG_DB_NAME>  
    Indexer 使用的 Postgres 数据库名称。默认数据库名称是 sui_indexer。  

--pg-user <PG_USER>  
    Indexer 使用的 Postgres 数据库用户名。默认用户名是 postgres。  

--pg-password <PG_PASSWORD>  
    Indexer 使用的 Postgres 数据库密码。默认密码是 postgrespw。  

--epoch-duration-ms <EPOCH_DURATION_MS>  
    设置 epoch 的持续时间。仅当同时传入 `--force-regenesis` 参数，  
    或者没有现有创世配置（系统会自动生成）时才能使用此参数。  
    当未设置该参数但传入了 `--force-regenesis` 时，epoch 持续时间将默认为 60 秒。  

--no-full-node  
    启动网络时不包含 fullnode。  

-h, --help  
    打印帮助信息（查看更多请使用 `--help`）。
```

</details>

### 保留本地网络状态


默认情况下，当使用 `sui start` 命令时，如果 `~/.sui/sui_config` 文件夹存在并包含 `genesis.blob` 文件，该命令将使用现有的创世配置和网络配置。
如果该文件夹不存在，命令会创建文件夹并生成新的创世配置。
如果你传入 `--network.config` 参数，命令会检查网络配置文件并尝试根据网络配置文件加载创世块。

当你在不使用 `--force-regenesis` 标志的情况下停止并重新启动网络时，所有历史记录都会被保留并可访问。

:::info
要生成自定义创世配置，请使用 `sui genesis` 命令并传入所需的自定义值。
有关可能的标志和选项的更多信息，请运行 `sui genesis --help`。
:::
