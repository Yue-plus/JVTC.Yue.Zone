import React from "react";
import Index from "@site/src/components/Index";

/** 语言 */
export function DevelopLanguageIndex() {
    return Index([
        {icon: "kotlin.svg", title: "Kotlin", text: "简洁、跨平台、有趣", href: "/docs/开发/语言/Kotlin/"},
        {icon: "java.svg", title: "Java", text: "跨平台、面向对象、泛型编程", href: "/docs/开发/语言/Java/"},
        {icon: "dart.svg", title: "Dart", text: "为全平台构建快速应用的客户端优化", href: "/docs/开发/语言/Dart/"},
        {icon: "python.svg", title: "Python", text: "解释型、高级通用编程语言", href: "/docs/开发/语言/Python/"},
        {icon: "rust.svg", title: "Rust", text: "通用、编译型、安全、并发、实用", href: "/docs/开发/语言/Rust/"},
        {icon: "ruby.svg", title: "Ruby", text: "开源的动态编程语言，注重简洁和效率", href: "/docs/开发/语言/Ruby/"},
    ])
}

/** 模板 */
export function DevelopTemplateIndex() {
    return Index([
        {icon: "thymeleaf.png", title: "Thymeleaf", text: "现代的服务器端 Java 模板引擎", href: "/docs/开发/语言/Java/Thymeleaf/"},
    ])
}

/** 工具 */
export function DevelopToolIndex() {
    return Index([
        {
            icon: "anaconda.svg",
            title: "Anaconda",
            text: "用于计算科学、数据科学、机器学习、大数据处理和预测分析的 Python 和 R 语言发行版本 ",
            href: "/docs/开发/工具/Anaconda/",
        },
        {
            icon: "chocolatey.svg",
            title: "Chocolatey",
            text: "Windows 现代软件自动化的包管理器",
            href: "/docs/开发/工具/Chocolatey/",
        },
        {icon: "winget.svg", title: "winget", text: "Windows 自带的包管理器", href: "/docs/开发/工具/winget/"},
        {
            icon: "gradle.svg",
            title: "Gradle",
            text: "从移动应用到微服务，从小型初创公司到大型企业，Gradle 可帮助团队更快地构建、自动化和交付更好的软件。",
            href: "/docs/开发/工具/Gradle/",
        },
        {icon: "graal-vm.svg", title: "GraalVM", text: "高性能！云原生！多语言！", href: "/docs/开发/工具/GraalVM/"},
        {icon: "apache.svg", title: "Maven", text: "Java 软件项目管理及自动构建工具", href: "/docs/开发/工具/Maven/"},
        {icon: "git.svg", title: "Git", text: "免费的开源分布式版本控制系统", href: "/docs/开发/工具/Git"},
        {
            icon: "PowerShell.svg",
            title: "PowerShell",
            text: "是一种跨平台的任务自动化解决方案",
            href: "/docs/开发/工具/PowerShell"
        },
        {icon: "OpenCV.png", title: "OpenCV", text: "跨平台的计算机视觉库", href: "/docs/开发/工具/OpenCV/"},
        {icon: "SSL.svg", title: "OpenSSL", text: "功能丰富且自包含的开源安全工具箱", href: "/docs/开发/工具/OpenSSL/"},
        {
            icon: "正则表达式.svg",
            title: "正则表达式",
            text: "构成搜索模式的字符串序列",
            href: "/docs/开发/工具/正则表达式/"
        },
    ])
}

/** 环境 */
export function DevelopEnvironIndex() {
    return Index([
        {
            icon: "Docker.svg",
            title: "Docker",
            text: "为相关程序提供操作系统层的虚拟化，比虚拟机更便捷高效",
            href: "/docs/开发/环境/Docker/"
        },
        {icon: "apache2.svg", title: "Apache2", text: "HTTP、Web 服务器", href: "/docs/开发/环境/Apache/httpd"},
        {icon: "tomcat.svg", title: "Tomcat", text: "Servlet 容器；JSP", href: "/docs/开发/环境/Tomcat/"},
    ])
}

/** 数据库 */
export function DBIndex() {
    return Index([
        {
            icon: "PostgreSQL.svg",
            title: "PostgreSQL",
            text: "世界上最先进的开源关系型数据库",
            href: "/docs/开发/环境/PostgreSQL/"
        },
        {icon: "database-fill.svg", title: "MariaDB & MySQL", text: "经典关系型数据库", href: "/docs/开发/环境/MariaDB&MySQL/"},
        {
            icon: "InfluxDB.svg",
            title: "InfluxDB",
            text: "用于存储和分析时间序列数据的开源数据库",
            href: "/docs/开发/环境/InfluxDB/"
        },
        {icon: "sqlite.svg", title: "SQLite", text: "自给自足、无服务器、零配置、事务性", href: "/docs/开发/环境/SQLite/"},
    ])
}

/** 框架 */
export function DevelopFrameworkIndex() {
    return Index([
        {icon: "spring.svg", title: "Spring", text: "互联网软件开发全家桶", href: "/docs/开发/框架/Spring/Boot/"},
        {
            icon: "hilla.png", 
            title: "Hilla", 
            text: "无需再处理 REST 端点或破译 GraphQL 查询。Hilla 无缝衔接 Spring Boot 与 React ，加速应用开发。",
            href: "/docs/开发/框架/Spring/Hilla/"
        },
        {
            icon: "flutter.svg",
            title: "Flutter",
            text: "只要一套代码库，即可构建、测试和发布适用于移动、Web、桌面和嵌入式平台的精美应用",
            href: "/docs/开发/框架/Flutter/",
        },
        {icon: "react.svg", title: "React", text: "用于构建 Web 和原生交互界面的库", href: "/docs/开发/框架/React/"},
        {icon: "vue.svg", title: "Vue", text: "渐进式 JavaScript 框架", href: "/docs/开发/框架/Vue/"},
        {icon: "lit.svg#flame", title: "Lit", text: "用于构建快速、轻量级的 Web 组件。", href: "/docs/开发/框架/Lit/"},
        {icon: "flask.png", title: "Flask", text: "轻量级 WSGI Web 应用程序框架", href: "/docs/开发/框架/Flask/"},
        {
            icon: "rocket.svg",
            title: "Rocket",
            text: "使用 Rust 编写快、安全不牺牲灵活性、可用性或类型安全性的 Web 应用程序",
            href: "/docs/开发/框架/Rocket/",
        },
    ])
}

/** 软件 */
export function DevelopSoftwareIndex() {
    return Index([
        {icon: "Android.svg", title: "Android", text: "原生安卓", href: "/docs/开发/软件/Android/"},
    ])
}

/** 软件 - 区块链 */
export function DevelopSoftwareBlockChainsIndex() {
    return Index([
        {
            icon: "solidity.svg",
            title: "Solidity",
            text: "一门为实现智能合约而创建的面向对象的高级编程语言",
            href: "/docs/开发/软件/区块链/Solidity/"
        },
        {icon: "Ethereum.svg", title: "以太坊", text: "创新应用程序和区块链网络的首要平台", href: "/docs/开发/软件/区块链/以太坊/"},
        {icon: "Solana.svg", title: "Solana", text: "为大规模应用而构建的高性能区块链", href: "/docs/开发/软件/区块链/Solana/"},
        {icon: "WeBank.png", title: "WeBASE", text: "微众银行区块链应用软件扩展", href: "/docs/开发/软件/区块链/WeBASE/"},
        {icon: "FISCO_BCOS.png", title: "FISCO BCOS", text: "稳定、高效、安全的区块链底层平台", href: "/docs/开发/软件/区块链/FiscoBcos/"},
    ])
}

/** 硬件 */
export function DevelopHardwareIndex() {
    return Index([
        {icon: "cw32.png", title: "CW32", text: "武汉芯源半导体", href: "/docs/开发/硬件/CW32/"}
    ])
}

/** 游戏 */
export function DevelopGameIndex() {
    return Index([
        {
            icon: "minecraft.webp",
            title: "Minecraft",
            text: "不是网易游戏代理的我的世界",
            href: "/docs/开发/游戏/Minecraft/"
        },
        {icon: "Terraria.png", title: "Terraria", text: "泰拉瑞亚", href: "/docs/开发/游戏/Terraria/"},
        {icon: "Unturned.png", title: "Unturned", text: "未转变者", href: "/docs/开发/游戏/Unturned/"},
        {icon: "godot.svg", title: "Godot", text: "自由，开源的 2D&3D 游戏引擎", href: "/docs/开发/游戏/Godot/"},
        {icon: "unity.svg", title: "Unity", text: "行业领先的实时 3D 开发平台", href: "/docs/开发/游戏/Unity/"},
    ])
}
