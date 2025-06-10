Crypto ATM System version 1.1 ドキュメント翻訳

ページ 1: ドキュメント概要

Page 1: Document Overview


Crypto ATM System version 1.1


(CONFIDENTIAL)

(機密)


This document provides a comprehensive overview of the Crypto ATM System (CAS), including server roles and deployment locations, network configuration and external connectivity, integrated security tools such as IP whitelisting and two-factor authentication, and the use of cloud services, third-party integrations, and data center environments.

この文書は、Crypto ATM System (CAS) の包括的な概要を提供するものです。これには、サーバーの役割とデプロイ場所、ネットワーク構成と外部接続、IPホワイトリストや二要素認証といった統合されたセキュリティツール、そしてクラウドサービス、サードパーティ統合、データセンター環境の利用が含まれます。


ページ 2: 目次

Page 2: Table of Contents


Table of Contents

目次


Section 1: Team Structure and Responsibilities ........................................................ 1 セクション 1: チーム構成と責任 ........................................................................ 1

Section 2: Development Service and Structure ........................................................ 2 セクション 2: 開発サービスと構造 ........................................................................ 2

2.1 Development Methodology ................................................................................ 2 2.1 開発手法 ............................................................................................................ 2

2.2 Source Control ................................................................................................... 2 2.2 ソース管理 ........................................................................................................ 2

2.3 Code Quality and Review .................................................................................... 2 2.3 コード品質とレビュー ........................................................................................ 2

2.4 AI-Powered Development Assistance ................................................................. 2 2.4 AIを活用した開発支援 ........................................................................................ 2

Section 3: Users ......................................................................................................... 3 セクション 3: ユーザー ......................................................................................... 3

3.1 Operator ............................................................................................................ 3 3.1 オペレーター .................................................................................................... 3

3.2 ATM Owner......................................................................................................... 3 3.2 ATMオーナー ..................................................................................................... 3

3.3 ATM Location Provider ........................................................................................ 3 3.3 ATM設置場所提供者 ........................................................................................ 3

Section: 4 Server Architecture ................................................................................... 4 セクション: 4 サーバーアーキテクチャ ................................................................... 4

4.1 Operational Server (ATM & CAS Operations) .................................................... 4 4.1 運用サーバー (ATM & CASオペレーション) .................................................... 4

4.1.1 Provider ....................................................................................................... 4 4.1.1 プロバイダー ............................................................................................... 4

4.1.2 Specification ............................................................................................... 4 4.1.2 仕様 ............................................................................................................ 4

4.1.3 Next Upgrade ............................................................................................... 5 4.1.3 次期アップグレード ..................................................................................... 5

4.1.4 Backup ........................................................................................................ 5 4.1.4 バックアップ ............................................................................................... 5

4.2 Application & Data Management Server (Admin, ATM Owner and ATM Location Provider) ................................................................................................................. 6 4.2 アプリケーション & データ管理サーバー (管理者、ATMオーナー、ATM設置場所提供者) ................................................................................................................. 6

4.2.1 Provider ....................................................................................................... 6 4.2.1 プロバイダー ............................................................................................... 6

4.2.2 Specification .................................................abekaketa ............................................................... 6 4.2.2 仕様 ............................................................................................................ 6

4.2.3 Next Upgrade ............................................................................................... 7 4.2.3 次期アップグレード ..................................................................................... 7

4.2.4 Backup ........................................................................................................ 7 4.2.4 バックアップ ............................................................................................... 7

Section 5: System ...................................................................................................... 8 セクション 5: システム ...................................................................................... 8

5.1 Admin Portal ..................................................................................................... 8 5.1 管理者ポータル ................................................................................................. 8

5.1.1 Features ...................................................................................................... 8 5.1.1 機能 ............................................................................................................ 8

5.1.2 Security ..................................................................................................... 10 5.1.2 セキュリティ ............................................................................................. 10

5.2 ATM Owner and ATM Location Provider Portal ................................................ 11 5.2 ATMオーナーおよびATM設置場所提供者ポータル ........................................ 11

5.2.1 Features .................................................................................................... 11 5.2.1 機能 .......................................................................................................... 11

5.2.3 Security ..................................................................................................... 12 5.2.3 セキュリティ ............................................................................................. 12


ページ 3: 目次 (続き)

Page 3: Table of Contents (continued)


Section 6: Compliance and Security Standards ...................................................... 13 セクション 6: コンプライアンスとセキュリティ基準 ........................................ 13

6.1 SOC 2 (System and Organization Controls Type 2) ............................................. 13 6.1 SOC 2 (System and Organization Controls Type 2) ............................................. 13

6.2 ISO/IEC 27001 .................................................................................................. 13 6.2 ISO/IEC 27001 .................................................................................................. 13

6.3 GDPR (General Data Protection Regulation) ...................................................... 13 6.3 GDPR (一般データ保護規則) ........................................................................... 13

6.4 TOTP-Based 2FA Security Compliance .............................................................. 13 6.4 TOTPベースの2FAセキュリティコンプライアンス ........................................ 13

6.5 SSL/TLS (Secure Sockets Layer / Transport Layer Security) ................................ 14

6.5 SSL/TLS (Secure Sockets Layer / Transport Layer Security) ................................ 14

6.6 VPN (Virtual Private Network) Access Control ................................................... 14 6.6 VPN (仮想プライベートネットワーク) アクセス制御 ........................................ 14

Section 7: System Architecture ............................................................................... 15 セクション 7: システムアーキテクチャ ............................................................... 15

7.1 Coinhub Service API ......................................................................................... 16 7.1 Coinhub サービスAPI ......................................................................................... 16

Section 9: CAS and ATM Network Diagram .............................................................. 17 セクション 9: CASとATMネットワーク図 .............................................................. 17

Section 10: Deployment and Operation Process ..................................................... 18 セクション 10: デプロイと運用プロセス ............................................................. 18

10.1 Pairing ATM Unit to Coinhub CAS .................................................................... 18 10.1 ATMユニットとCoinhub CASのペアリング .................................................... 18

10.2 ATM Unit Operation ........................................................................................ 19 10.2 ATMユニット運用 ........................................................................................ 19


ページ 4: セクション 1

Page 4: Section 1


Section 1: Team Structure and Responsibilities

セクション 1: チーム構成と責任


このセクションでは、プロジェクトを推進するチームの構成と、各メンバーが担う責任について詳述します。それぞれの役割が、システムの堅牢性と革新性を支える重要な柱となっています。


Role	Name	Responsibility
役割	氏名	責任
System Lead	JD Baltazar	Oversee overall system architecture and development. Responsible for designing and implementing core backend APIs, including Exchange API integration and system-wide service orchestration.
システムリード	JD Baltazar	システム全体のアーキテクチャと開発を統括します。Exchange API統合やシステム全体のサービスオーケストレーションを含む、コアバックエンドAPIの設計と実装に責任を負います。
Security Lead	Seiki Rowins Bie	Leads the development of secure backend services. Ensures robust transaction security, API protection, and secure operation flow across the entire system.
セキュリティリード	Seiki Rowins Bie	セキュアなバックエンドサービスの開発を主導します。堅牢なトランザクションセキュリティ、API保護、およびシステム全体にわたるセキュアな運用フローを保証します。
Fullstack Engr.	Jayvee Basco	Develops and maintains the web portal for Administrators and ATM Owner. Handles UI/UX implementation, transaction monitoring dashboards.
フルスタックエンジニア	Jayvee Basco	管理者およびATMオーナー向けのウェブポータルを開発し、保守します。UI/UXの実装、トランザクション監視ダッシュボードなどを担当します。
QA Specialist	Christian John Flores	Responsible for testing all web portal functionalities, verifying data accuracy, UI consistency, and ensuring security and performance across user management, transaction monitoring, and reporting features.
QAスペシャリスト	Christian John Flores	すべてのウェブポータル機能のテスト、データ精度、UIの一貫性の検証、およびユーザー管理、トランザクション監視、レポート機能におけるセキュリティとパフォーマンスの確保に責任を負います。

1 | P a g e


ページ 5: セクション 2

Page 5: Section 2


Section 2: Development Service and Structure

セクション 2: 開発サービスと構造


このセクションでは、プロジェクトのライフサイクル全体を支えるためのツール、手法、およびサービスについて概説します。これらは、私たちの開発プロセスを効率的かつ高品質に保つための基盤となります。


2.1 Development Methodology

2.1 開発手法


Agile Framework: Kanban Kanban is used to facilitate continuous delivery, improve workflow transparency, and enable incremental updates across the Crypto Server backend, ATM, Web Portal etc. Tasks are visualized in a board system to prioritize work and manage parallel hardware and software development streams.

アジャイルフレームワーク: カンバン カンバンは、Crypto Serverのバックエンド、ATM、ウェブポータルなどにおける継続的デリバリーを促進し、ワークフローの透明性を向上させ、段階的なアップデートを可能にするために採用されています。タスクはボードシステムで視覚化され、作業の優先順位付けと、並行するハードウェアおよびソフトウェア開発ストリームの管理に活用されます。


2.2 Source Control

2.2 ソース管理


Platform: GitHub GitHub is used to manage source code for both the server-side and portal. It enables version control, branching strategies, and team collaboration. All critical components including wallet services, transaction logic, are maintained under secure repositories.

プラットフォーム: GitHub GitHubは、サーバーサイドとポータルの両方のソースコード管理に使用されています。これにより、バージョン管理、ブランチング戦略、およびチームコラボレーションが実現されます。ウォレットサービス、トランザクションロジックを含むすべての重要なコンポーネントは、セキュアなリポジトリで管理されています。


2.3 Code Quality and Review

2.3 コード品質とレビュー


Tool: Codacy Codacy is integrated for static code analysis and review automation, covering backend services and extensions. It ensures code quality, consistency, and industry standards.

ツール: Codacy Codacyは、バックエンドサービスおよび拡張機能を含む静的コード解析とレビューの自動化のために統合されています。これにより、コード品質、一貫性、および業界標準が保証されます。


2.4 AI-Powered Development Assistance

2.4 AIを活用した開発支援


Tool: GitHub Copilot GitHub Copilot is used within Visual Studio Code to assist developers in writing code faster and more efficiently. It provides real-time AI-driven suggestions for functions, scripts, and logic across server-side applications and extensions. Copilot accelerates development, reduces repetitive coding tasks, and helps enforce consistent patterns during implementation.

ツール: GitHub Copilot GitHub Copilotは、Visual Studio Code内で開発者がより速く、より効率的にコードを記述できるように支援するために使用されています。サーバーサイドアプリケーションおよび拡張機能全体にわたる関数、スクリプト、ロジックに対して、リアルタイムのAI駆動型提案を提供します。Copilotは開発を加速し、反復的なコーディングタスクを削減し、実装中のパターンの一貫性を強制するのに役立ちます。


2 | P a g e


ページ 6: セクション 3

Page 6: Section 3


Section 3: Users

セクション 3: ユーザー


Crypto ATM System (CAS) は、プラットフォーム内でそれぞれ特定の役割と責任を持つ複数の種類のユーザーをサポートしています。この多層的なユーザー構造が、システムの円滑な運用とエコシステムの拡大を可能にしています。


3.1 Operator

3.1 オペレーター


The Service Operator (CoinHub) is the primary provider of the ATM network and platform infrastructure. This role includes managing the backend systems, security services, transaction processing, and compliance controls. The Service Operator (CoinHub) owns and maintains the overall ecosystem, ensuring that all connected users including ATM Location Provider users and ATM Owners can securely access the platform and services.

サービスオペレーター (CoinHub) は、ATMネットワークおよびプラットフォームインフラストラクチャの主要な提供者です。この役割には、バックエンドシステム、セキュリティサービス、トランザクション処理、およびコンプライアンス管理が含まれます。サービスオペレーター (CoinHub) は、エコシステム全体を所有・維持し、ATM設置場所提供者ユーザーやATMオーナーを含むすべての接続ユーザーが、プラットフォームおよびサービスに安全にアクセスできることを保証します。


3.2 ATM Owner

3.2 ATMオーナー


The ATM Owner is an individual or entity that has fully purchased their own ATM unit. While they own the hardware, they rely on the Service Operator to connect the device to the broader platform for transaction processing. ATM Owners have more autonomy over their terminal location and operations but must maintain connection and configuration through the Service Operator's system.

ATMオーナーは、自身のATMユニットを完全に購入した個人または法人です。ハードウェアを所有していますが、トランザクション処理のためにデバイスをより広範なプラットフォームに接続する際は、サービスオペレーターに依存します。ATMオーナーは、端末の設置場所と運用に関してより高い自律性を持っていますが、サービスオペレーターのシステムを通じて接続と設定を維持する必要があります。


3.3 ATM Location Provider

3.3 ATM設置場所提供者


The ATM Location Provider is an authorized business or individual granted access to utilize the Crypto ATM System to serve their customers. While they do not own the ATM hardware, they are assigned terminals by the Service Operator and are responsible for managing day-to-day operations within the platform’s guidelines.

ATM設置場所提供者は、顧客にサービスを提供するためにCrypto ATM Systemを利用することを許可された公認の事業体または個人です。彼らはATMハードウェアを所有していませんが、サービスオペレーターによって端末が割り当てられ、プラットフォームのガイドラインに従って日々の運用を管理する責任を負います。


3 | P a g e


ページ 7: セクション 4

Page 7: Section: 4


Section: 4 Server Architecture

セクション: 4 サーバーアーキテクチャ


The CoinHub System is built on dual-server architecture to ensure optimal performance, security, and scalability across all operations.

CoinHubシステムは、すべての運用において最適なパフォーマンス、セキュリティ、およびスケーラビリティを確保するために、デュアルサーバーアーキテクチャに基づいて構築されています。


It is optimized for secure data processing and storage, ensuring the integrity of operational records while providing a responsive interface for admin users and business ATM Owner and ATM Location Provider to monitor and manage their ATM network.

これは、セキュアなデータ処理とストレージに最適化されており、運用記録の整合性を確保しつつ、管理者ユーザー、ビジネスATMオーナー、およびATM設置場所提供者が自身のATMネットワークを監視および管理するための応答性の高いインターフェースを提供します。


These two dedicated servers serve distinct yet interconnected purposes:

これら2つの専用サーバーは、それぞれ異なるが相互に連結した目的を果たします。


4.1 Operational Server (ATM & CAS Operations)

4.1 運用サーバー (ATM & CASオペレーション)


This server is responsible for handling all real-time ATM and CAS (Crypto ATM System) transactions. It manages user interactions at the ATM, processes cryptocurrency purchases and withdrawals, and ensures secure communication between the ATM hardware and the blockchain network. Its real-time capability and high availability are critical to maintaining smooth and uninterrupted operations at all CoinHub ATMs deployed in the field.

このサーバーは、すべてのリアルタイムATMおよびCAS (Crypto ATM System) トランザクションを処理する責任を負います。ATMでのユーザーインタラクションを管理し、暗号通貨の購入と引き出しを処理し、ATMハードウェアとブロックチェーンネットワーク間のセキュアな通信を保証します。そのリアルタイム機能と高可用性は、現場に展開されているすべてのCoinHub ATMでの円滑かつ中断のない運用を維持するために不可欠です。


4.1.1 Provider

4.1.1 プロバイダー


Service	Description
サービス	説明
Digital Ocean Droplets (VPS)	It is a virtual private server (VPS) that runs on cloud infrastructure. Each Droplet is a scalable compute instance that can be used from small to enterprise systems.
Digital Ocean Droplets (VPS)	クラウドインフラストラクチャ上で動作する仮想プライベートサーバー (VPS) です。各Dropletは、小規模システムからエンタープライズシステムまで利用できるスケーラブルなコンピュートインスタンスです。

4.1.2 Specification

4.1.2 仕様


Type: Memory-Optimized Droplets

タイプ: メモリ最適化Droplets


Memory-Optimized Droplets use NVMe SSDs which deliver better disk performance for workloads that involve a large number of transactions

メモリ最適化Dropletsは、多数のトランザクションを伴うワークロードに対して優れたディスクパフォーマンスを提供するNVMe SSDを使用しています。


Type	Value
タイプ	値
VCPU	2
VCPU	2
Memory (GiB)	16
メモリ (GiB)	16

4 | P a g e


ページ 8: セクション 4 (続き)

Page 8: Section 4 (continued)


Transfer (GiB)	4,000
転送量 (GiB)	4,000
SSD Variant	6x
SSDバリアント	6倍
SSD (GiB)	300
SSD (GiB)	300

4.1.3 Next Upgrade

4.1.3 次期アップグレード


Type: Memory-Optimized Droplets

タイプ: メモリ最適化Droplets


Type	Value
タイプ	値
VCPU	8
VCPU	8
Memory (GiB)	32
メモリ (GiB)	32
Transfer (GiB)	6,000
転送量 (GiB)	6,000
SSD Variant	6x
SSDバリアント	6倍
SSD (GiB)	600
SSD (GiB)	600

4.1.4 Backup

4.1.4 バックアップ


Category	Type	Service	Value
カテゴリ	タイプ	サービス	値
Backup	Snapshot	Service	4x per month
バックアップ	スナップショット	サービス	月4回

5 | P a g e


ページ 9: セクション 4 (続き)

Page 9: Section 4 (continued)


4.2 Application & Data Management Server (Admin, ATM Owner and ATM Location Provider)

4.2 アプリケーション & データ管理サーバー (管理者、ATMオーナー、ATM設置場所提供者)


The second server supports the backend management systems, including the Admin Portal, ATM Owner and ATM Location Provider Portal. This server handles:

2番目のサーバーは、管理者ポータル、ATMオーナーおよびATM設置場所提供者ポータルを含むバックエンド管理システムをサポートします。このサーバーは以下を処理します。


Admin account management
管理者アカウント管理
ATM Owner and ATM Location Provider Account Profile
ATMオーナーおよびATM設置場所提供者のアカウントプロファイル
Transaction history storage
トランザクション履歴の保存
Commission calculations and reports
手数料計算とレポート
Dashboard analytics for both Admins, ATM Owner and ATM Location Provider
管理者、ATMオーナー、ATM設置場所提供者の両方に対するダッシュボード分析

4.2.1 Provider

4.2.1 プロバイダー


Service	Description
サービス	説明
Amazon EC2 (Elastic Compute Cloud)	Is a web service provided by AWS that enables users to run virtual servers in the cloud. It allows you to quickly launch scalable, secure, and customizable computing instances, making it ideal for hosting applications, websites, and backend services.
Amazon EC2 (Elastic Compute Cloud)	AWSが提供するウェブサービスであり、ユーザーがクラウド内で仮想サーバーを実行できるようにします。スケーラブルでセキュア、かつカスタマイズ可能なコンピューティングインスタンスを迅速に起動できるため、アプリケーション、ウェブサイト、バックエンドサービスのホスティングに最適です。

4.2.2 Specification

4.2.2 仕様


Type: m5.xlarge It has a feature either the 1st or 2nd gen. Intel Xeon Platinum 8000 series processor with a sustained all core Turbo CPU clock speed of up to 3.1 GHz. Additionally, there is support for the new Intel Advanced Vector Extensions 512 (AVX-512) instruction set, offering up to 2x the FLOPS per core.

タイプ: m5.xlarge 第1世代または第2世代のIntel Xeon Platinum 8000シリーズプロセッサを搭載しており、全コアのターボCPUクロック速度は最大3.1 GHzを維持します。さらに、新しいIntel Advanced Vector Extensions 512 (AVX-512) 命令セットをサポートしており、コアあたり最大2倍のFLOPSを提供します。


Type	Value
タイプ	値
VCPU	4
VCPU	4
Memory (GiB)	16
メモリ (GiB)	16
Instance Storage	EBS-Only
インスタンスストレージ	EBSのみ
Network Bandwidth (Gbps)	Up to 10
ネットワーク帯域幅 (Gbps)	最大10
EBS Bandwidth (Mbps)	Up to 4,750
EBS帯域幅 (Mbps)	最大4,750

6 | P a g e


ページ 10: セクション 4 (続き)

Page 10: Section 4 (continued)


4.2.3 Next Upgrade

4.2.3 次期アップグレード


Type: m5.2xlarge

タイプ: m5.2xlarge


Service	Value
サービス	値
VCPU	8
VCPU	8
Memory (GiB)	32
メモリ (GiB)	32
Instance Storage	EBS-Only
インスタンスストレージ	EBSのみ
Network Bandwidth (Gbps)	Up to 10
ネットワーク帯域幅 (Gbps)	最大10
EBS Bandwidth (Mbps)	Up to 4,750
EBS帯域幅 (Mbps)	最大4,750

4.2.4 Backup

4.2.4 バックアップ


Category	Type	Description	Value
カテゴリ	タイプ	説明	値
Backup	Database	Service	Daily
バックアップ	データベース	サービス	毎日
Snapshot	Service	Description	4x per month
スナップショット	サービス	説明	月4回

7 | P a g e


ページ 11: セクション 5

Page 11: Section 5


Section 5: System

セクション 5: システム


There are two core systems under the CoinHub platform that support its operations and ensure seamless interaction between Administrators, ATM Owner and ATM Location Provider.

CoinHubプラットフォームには、その運用をサポートし、管理者、ATMオーナー、およびATM設置場所提供者間のシームレスな相互作用を保証する2つの中核システムが存在します。


These two systems form the operational backbone of CoinHub, enabling streamlined Administration and improved ATM Owner and ATM Location Provider engagement.

これら2つのシステムはCoinHubの運用基盤を形成し、合理化された管理とATMオーナーおよびATM設置場所提供者のエンゲージメント向上を実現します。


5.1 Admin Portal

5.1 管理者ポータル


The Admin Portal serves as the central control panel for CoinHub's internal management team. Through this portal, administrators can manage all ATM Owner and ATM Location Provider accounts, including onboarding new ATM Owner and ATM Location Provider, configuring access levels, and overseeing the operational status of each ATM Owner and ATM Location Provider. Additionally, the portal provides detailed insights and reporting features that help the CoinHub team monitor system-wide performance and ensure all ATM units and transactions are functioning smoothly.

管理者ポータルは、CoinHubの内部管理チーム向けの中央制御パネルとして機能します。このポータルを通じて、管理者はすべてのATMオーナーおよびATM設置場所提供者のアカウントを管理でき、新規ATMオーナーおよびATM設置場所提供者のオンボーディング、アクセスレベルの設定、各ATMオーナーおよびATM設置場所提供者の運用状況の監視などが含まれます。さらに、このポータルは詳細なインサイトとレポート機能を提供し、CoinHubチームがシステム全体のパフォーマンスを監視し、すべてのATMユニットとトランザクションが円滑に機能していることを確認するのに役立ちます。


5.1.1 Features

5.1.1 機能


Function	Description
機能	説明
A User Management	Enables administrators to create, edit, disable, and delete admin accounts. It also includes control over access levels and roles, ensuring proper permission-based access across the system.
A ユーザー管理	管理者が管理者アカウントの作成、編集、無効化、および削除を可能にします。また、アクセスレベルと役割の制御も含まれ、システム全体での適切な権限ベースのアクセスを保証します。
B User Report Generation	Allows administrators to generate and download a complete list of admin users in PDF and Excel formats for recordkeeping, compliance, and audit trail maintenance.
B ユーザーレポート生成	管理者が管理者ユーザーの完全なリストをPDFおよびExcel形式で生成およびダウンロードすることを可能にし、記録管理、コンプライアンス、監査証跡の維持に役立ちます。
C ATM Owner and ATM Location Provider Management	Provides tools for managing ATM Owner and ATM Location Provider accounts, including the approval of new applications and the ability to edit, disable, or delete existing ATM Owner and ATM Location Provider profiles.
C ATMオーナーおよびATM設置場所提供者管理	新規申請の承認や、既存のATMオーナーおよびATM設置場所提供者プロファイルの編集、無効化、または削除機能を含む、ATMオーナーおよびATM設置場所提供者アカウントを管理するためのツールを提供します。

8 | P a g e


ページ 12: セクション 5 (続き)

Page 12: Section 5 (continued)


D ATM Owner and ATM Location Provider Report Generation	Supports exporting a full list of ATM Owner and ATM Location Provider accounts into PDF and Excel formats, useful for reporting, audits, and ATM Owner and ATM Location Provider lifecycle reviews.
D ATMオーナーおよびATM設置場所提供者レポート生成	ATMオーナーおよびATM設置場所提供者アカウントの完全なリストをPDFおよびExcel形式でエクスポートすることをサポートし、レポート作成、監査、およびATMオーナーおよびATM設置場所提供者のライフサイクルレビューに役立ちます。
E Terminal Management	Facilitates assigning or unassigning ATM terminals to specific ATM Owner and ATM Location Provider. Terminal records include details such as location, status, and associated ATM Owner and ATM Location Provider.
E 端末管理	特定のATMオーナーおよびATM設置場所提供者にATM端末を割り当てたり、割り当てを解除したりすることを容易にします。端末記録には、場所、ステータス、および関連するATMオーナーとATM設置場所提供者などの詳細が含まれます。
F Terminal Report Generation	Generates reports listing all terminals, including status and assignment details, and provides downloadable formats (PDF and Excel) for administrative use.
F 端末レポート生成	すべての端末をリストアップしたレポートを生成し、ステータスや割り当ての詳細を含め、管理目的でダウンロード可能な形式 (PDFおよびExcel) を提供します。
G Transactions Management	Provides read-only access for administrators to view all transactions conducted across ATM terminals, with details like transaction ID, timestamp, amount, and terminal info.
G トランザクション管理	管理者がATM端末全体で行われたすべてのトランザクションを閲覧するための読み取り専用アクセスを提供し、トランザクションID、タイムスタンプ、金額、端末情報などの詳細が含まれます。
H Transactions Report Generation	Enables the export of transaction data from any terminal in PDF and Excel formats for reconciliation, reporting, or financial analysis.
H トランザクションレポート生成	任意の端末からのトランザクションデータをPDFおよびExcel形式でエクスポートすることを可能にし、照合、レポート作成、または財務分析に利用できます。
I Audit Logs	Displays a history of all administrative actions within the system, helping track changes for transparency and operational accountability.
I 監査ログ	システム内で行われたすべての管理操作の履歴を表示し、透明性と運用上の説明責任のために変更を追跡するのに役立ちます。
J Audit Logs Report Generation	Allow administrators to export complete audit logs in PDF and Excel formats to support internal reviews and compliance checks.
J 監査ログレポート生成	管理者が完全な監査ログをPDFおよびExcel形式でエクスポートすることを可能にし、内部レビューおよびコンプライアンスチェックをサポートします。
K Dashboard card data counters	Displays real-time counters on the admin dashboard for quick visibility into the total number of Administrators, ATM Owner, ATM Location Provider, and terminals.
K ダッシュボードカードデータカウンター	管理者ダッシュボードにリアルタイムのカウンターを表示し、管理者、ATMオーナー、ATM設置場所提供者、および端末の総数を素早く把握できるようにします。
L Account Settings	It gives administrators the ability to update their account email and password and manage security options such as enabling or disabling Two-Factor Authentication (2FA).
L アカウント設定	管理者がアカウントのメールアドレスとパスワードを更新し、二要素認証 (2FA) の有効化または無効化などのセキュリティオプションを管理する機能を提供します。

9 | P a g e


ページ 13: セクション 5 (続き)

Page 13: Section 5 (continued)


M Forgot Password	Provides a secure recovery process by sending a one-time password reset link to the administrator's registered email, allowing them to regain access to their account.
M パスワードを忘れた場合	管理者の登録済みメールアドレスにワンタイムパスワードリセットリンクを送信することで、安全な回復プロセスを提供し、アカウントへのアクセスを回復できるようにします。

5.1.2 Security

5.1.2 セキュリティ


Function	Description
機能	説明
A IP Whitelisting	This feature restricts access to the Admin Portal by allowing only predefined IP addresses. Even if an administrator’s credentials are compromised, login attempts from non-whitelisted IPs will be blocked. This adds an extra layer of protection by limiting access to trusted network environments such as internal offices or VPN-secured locations.
A IPホワイトリスト	この機能は、事前に定義されたIPアドレスのみを許可することで、管理者ポータルへのアクセスを制限します。管理者の認証情報が漏洩した場合でも、ホワイトリストに登録されていないIPからのログイン試行はブロックされます。これにより、社内オフィスやVPNで保護された場所などの信頼できるネットワーク環境にアクセスを限定することで、追加の保護層が加わります。
B 2FA	Two-Factor Authentication enhances account security by requiring administrators to enter a time-based one-time password (TOTP) in addition to their regular login credentials. 2FA must be enabled in the account settings and is compatible with standard authenticator apps such as Google Authenticator or Authy, ensuring that even if a password is compromised, access remains secure.
B 2FA	二要素認証は、通常のログイン認証情報に加えて、時間ベースのワンタイムパスワード (TOTP) を管理者に入力させることで、アカウントのセキュリティを強化します。2FAはアカウント設定で有効にする必要があり、Google AuthenticatorやAuthyなどの標準的な認証アプリと互換性があり、パスワードが漏洩した場合でもアクセスが安全に保たれることを保証します。

10 | P a g e


ページ 14: セクション 5 (続き)

Page 14: Section 5 (continued)


5.2 ATM Owner and ATM Location Provider Portal

5.2 ATMオーナーおよびATM設置場所提供者ポータル


This Portal is designed specifically for CoinHub's ATM Owner and ATM Location Provider to provide transparency and self-service capabilities. Through this portal, they can view and monitor real-time ATM transaction data associated with their machines. It also provides a detailed breakdown of their earnings, including commission reports, transaction summaries, and performance metrics. This portal empowers ATM Owner and ATM Location Provider to stay informed, manage their operations more effectively, and track their profitability over time.

このポータルは、CoinHubのATMオーナーおよびATM設置場所提供者向けに特別に設計されており、透明性とセルフサービス機能を提供します。このポータルを通じて、彼らは自身のマシンに関連するリアルタイムのATMトランザクションデータを閲覧および監視できます。また、手数料レポート、トランザクション概要、パフォーマンス指標を含む、収益の詳細な内訳も提供されます。このポータルは、ATMオーナーおよびATM設置場所提供者が情報にアクセスし、運用をより効果的に管理し、時間経過に伴う収益性を追跡する能力を強化します。


5.2.1 Features

5.2.1 機能


Function	Description
機能	説明
A Terminal Management	Can view and manage the ATM terminals assigned to them. This includes accessing terminal details such as status, location, and performance indicators relevant to their operations.
A 端末管理	自身に割り当てられたATM端末を閲覧および管理できます。これには、ステータス、場所、および運用に関連するパフォーマンス指標などの端末詳細へのアクセスが含まれます。
B Terminal Report Generation	Can generate and download reports listing all of their assigned terminals in PDF and Excel formats. These reports include key data such as terminal ID, status, and activity logs.
B 端末レポート生成	割り当てられたすべての端末をリストアップしたレポートをPDFおよびExcel形式で生成およびダウンロードできます。これらのレポートには、端末ID、ステータス、アクティビティログなどの主要データが含まれます。
C Transactions Management	Have access to view all transactions conducted through their assigned terminals. This includes detailed information such as transaction ID, time, status, and terminal used.
C トランザクション管理	割り当てられた端末を通じて行われたすべてのトランザクションを閲覧するアクセス権を持ちます。これには、トランザクションID、時刻、ステータス、使用された端末などの詳細情報が含まれます。
D Transactions Report Generation	Can export transaction records specific to their terminals in both PDF and Excel formats for reconciliation, reporting, and business analysis.
D トランザクションレポート生成	自身の端末に特化したトランザクション記録をPDFおよびExcel形式の両方でエクスポートでき、照合、レポート作成、ビジネス分析に利用できます。
E Account Settings	Can update their account information, including their registered email and password, and manage security settings such as enabling or disabling Two-Factor Authentication (2FA).
E アカウント設定	登録済みメールアドレスやパスワードを含むアカウント情報を更新し、二要素認証 (2FA) の有効化または無効化などのセキュリティ設定を管理できます。

11 | P a g e


ページ 15: セクション 5 (続き)

Page 15: Section 5 (continued)


F Forgot Password	If ATM Owner and ATM Location Provider forgets their login credentials, the system will send a secure one-time reset link to their registered email, allowing them to regain access to their account.
F パスワードを忘れた場合	ATMオーナーおよびATM設置場所提供者がログイン認証情報を忘れた場合、システムは登録済みのメールアドレスにセキュアなワンタイムリセットリンクを送信し、アカウントへのアクセスを回復できるようにします。
G Dashboard card data counters	Displays summary cards showing the total number of active terminals and total transactions, providing a quick snapshot of operational metrics.
G ダッシュボードカードデータカウンター	アクティブな端末の総数と総トランザクション数を示すサマリーカードを表示し、運用指標のクイックスナップショットを提供します。
H Payout	ATM Owner and ATM Location Provider can view their earnings summary and payout status. The payout section shows transaction-based commissions, payment schedules, and payout history based on their assigned terminals.
H 支払い	ATMオーナーおよびATM設置場所提供者は、自身の収益概要と支払い状況を閲覧できます。支払いセクションでは、割り当てられた端末に基づくトランザクションベースの手数料、支払いスケジュール、および支払い履歴が表示されます。

5.2.3 Security

5.2.3 セキュリティ


Function	Description
機能	説明
A 2FA	Can enhance the security of their accounts by enabling Two-Factor Authentication. Once enabled, logging in will require both the account password and a time-based one-time code (TOTP) from an authenticator app such as Google Authenticator or Authy, helping prevent unauthorized access even if login credentials are compromised.
A 2FA	二要素認証を有効にすることで、アカウントのセキュリティを強化できます。一度有効にすると、ログインにはアカウントパスワードと、Google AuthenticatorやAuthyなどの認証アプリからの時間ベースのワンタイムコード (TOTP) の両方が必要となり、ログイン認証情報が漏洩した場合でも不正アクセスを防ぐのに役立ちます。

12 | P a g e


ページ 16: セクション 6

Page 16: Section 6


Section 6: Compliance and Security Standards

セクション 6: コンプライアンスとセキュリティ基準


The Crypto ATM Application Server leverages industry-recognized third-party services and infrastructure that support various global compliance frameworks.

Crypto ATMアプリケーションサーバーは、さまざまなグローバルなコンプライアンスフレームワークをサポートする、業界で認められたサードパーティサービスとインフラストラクチャを活用しています。


This section outlines the compliance posture across key components of the system, ensuring trust, data protection, and operational integrity.

このセクションでは、システムの主要コンポーネントにおけるコンプライアンス状況を概説し、信頼、データ保護、および運用上の整合性を保証します。


6.1 SOC 2 (System and Organization Controls Type 2)

6.1 SOC 2 (System and Organization Controls Type 2)


SOC 2 compliance ensures that service providers securely manage data to protect the privacy and interests of users. Core services like AWS, GitHub, and DigitalOcean support SOC 2 compliance, offering audited controls for availability, confidentiality, and integrity of hosted systems.

SOC 2コンプライアンスは、サービスプロバイダーがユーザーのプライバシーと利益を保護するためにデータを安全に管理することを保証します。AWS、GitHub、DigitalOceanなどのコアサービスはSOC 2コンプライアンスをサポートしており、ホストされているシステムの可用性、機密性、および整合性に関する監査済みの管理策を提供します。


6.2 ISO/IEC 27001

6.2 ISO/IEC 27001


This international standard specifies the requirements for establishing, implementing, and maintaining an information security management system (ISMS). Services such as AWS, GitHub, Codacy, and DigitalOcean are certified under ISO/IEC 27001, contributing to the secure handling of user data, source code, and infrastructure.

この国際規格は、情報セキュリティマネジメントシステム (ISMS) の確立、実装、および維持に関する要件を規定しています。AWS、GitHub、Codacy、DigitalOceanなどのサービスはISO/IEC 27001の認証を受けており、ユーザーデータ、ソースコード、およびインフラストラクチャの安全な取り扱いに貢献しています。


6.3 GDPR (General Data Protection Regulation)

6.3 GDPR (一般データ保護規則)


All user and partner data processed through the ATM platform adheres to GDPR principles when handling personal information. Services like AWS, GitHub, Google Authenticator, and Codacy are GDPR-compliant, ensuring data residency, access transparency, and user consent where applicable.

ATMプラットフォームを通じて処理されるすべてのユーザーおよびパートナーデータは、個人情報の取り扱いにおいてGDPRの原則に準拠しています。AWS、GitHub、Google Authenticator、CodacyなどのサービスはGDPRに準拠しており、データ所在地、アクセス透明性、および適用される場合のユーザー同意を保証します。


6.4 TOTP-Based 2FA Security Compliance

6.4 TOTPベースの2FAセキュリティコンプライアンス


The platform enforces Two-Factor Authentication using compliant methods such as TOTP (Time-Based One-Time Password), supported by Google Authenticator and Authy. These follow standard security models for identity protection and are compatible with ISO 27001 and NIST SP 800-63.

このプラットフォームは、Google AuthenticatorおよびAuthyがサポートするTOTP (時間ベースワンタイムパスワード) などの準拠した方法を用いて二要素認証を強制します。これらは、ID保護のための標準的なセキュリティモデルに従っており、ISO 27001およびNIST SP 800-63と互換性があります。


13 | P a g e


ページ 17: セクション 6 (続き)

Page 17: Section 6 (continued)


6.5 SSL/TLS (Secure Sockets Layer / Transport Layer Security)

6.5 SSL/TLS (Secure Sockets Layer / Transport Layer Security)


All data transmitted between clients, the admin portal, ATMs, and backend APIs are secured using TLS (SSL's modern successor), ensuring end-to-end encryption in transit. TLS 1.2 or higher is enforced across all system components, meeting best practices for secure HTTPS communication and complying with data protection standards such as ISO 27001, GDPR, and PCI DSS.

クライアント、管理者ポータル、ATM、およびバックエンドAPI間で送信されるすべてのデータは、TLS (SSLの現代的な後継) を使用して保護されており、転送中のエンドツーエンド暗号化を保証します。すべてのシステムコンポーネントでTLS 1.2以上が強制されており、セキュアなHTTPS通信のベストプラクティスを満たし、ISO 27001、GDPR、PCI DSSなどのデータ保護基準に準拠しています。


6.6 VPN (Virtual Private Network) Access Control

6.6 VPN (仮想プライベートネットワーク) アクセス制御


Administrative access to internal systems (e.g., backend servers, deployment interfaces) is restricted via VPN, ensuring that only authenticated and authorized users can interact with sensitive services. This also implemented for ATM Unit to CAS and it this access helps enforce network segmentation, zero-trust security, and supports compliance with SOC 2 and ISO 27001 by preventing unauthorized remote access.

内部システム (例: バックエンドサーバー、デプロイインターフェース) への管理者アクセスはVPNを介して制限されており、認証され承認されたユーザーのみが機密サービスと対話できることを保証します。これはATMユニットからCASへのアクセスにも実装されており、このアクセスはネットワークセグメンテーション、ゼロトラストセキュリティを強制し、不正なリモートアクセスを防ぐことでSOC 2およびISO 27001への準拠をサポートします。


14 | P a g e


ページ 18: セクション 7, 9, 10

Page 18: Section 7, 9, 10


Section 7: System Architecture

セクション 7: システムアーキテクチャ


For ATM Unit and Coinhub CAS operation. Refer to Section 10.2 ATM Unit Operation. Page 19

ATMユニットおよびCoinhub CASの運用については、セクション10.2 ATMユニット運用 (19ページ) を参照してください。


Important Note: The Coinhub Service API ensures ATM operations are securely isolated and inaccessible from the Web Service. See Section 8 for details.

重要事項: CoinhubサービスAPIは、ATM運用がウェブサービスから安全に隔離され、アクセスできないことを保証します。詳細はセクション8を参照してください。


15 | P a g e


ページ 19: セクション 7.1

Page 19: Section 7.1


7.1 Coinhub Service API

7.1 Coinhub サービスAPI


Important Note: For security purposes, the Operation API is restricted to private connections and used exclusively for internal processes no public access is allowed. The Web API is also secured, with strict controls in place to regulate access between it and the Operation API.

重要事項: セキュリティ上の理由から、オペレーションAPIはプライベート接続に限定され、内部プロセス専用に利用され、公開アクセスは許可されていません。ウェブAPIも保護されており、ウェブAPIとオペレーションAPI間のアクセスを規制するための厳格な制御が導入されています。


16 | P a g e


ページ 20: セクション 9

Page 20: Section 9


Section 9: CAS and ATM Network Diagram

セクション 9: CASとATMネットワーク図


Important Note: Red line connection is for ATM Operation Green line connection is for internal Data Operation Black line connection is for external Data Operation

重要事項: 赤色の線はATM運用接続、緑色の線は内部データ運用接続、黒色の線は外部データ運用接続を表します。


17 | P a g e


ページ 21: セクション 10

Page 21: Section 10


Section 10: Deployment and Operation Process

セクション 10: デプロイと運用プロセス


10.1 Pairing ATM Unit to Coinhub CAS

10.1 ATMユニットとCoinhub CASのペアリング


Important Note:

重要事項:


Port 7741 must be open during the initial pairing of a new ATM unit. The connection is secured via SSL with certificate-based authentication during the pairing process.
新しいATMユニットの初回ペアリング時には、ポート7741を開放する必要があります。ペアリングプロセス中、接続は証明書ベースの認証を用いたSSLによって保護されます。

Once the pairing request is approved, Coinhub CAS will send a unique VPN configuration for the specific ATM unit.
ペアリング要求が承認されると、Coinhub CASは特定のATMユニットに固有のVPN設定を送信します。

After the VPN connection is successfully established and registered, port 7741 is closed for security.
VPN接続が正常に確立および登録された後、セキュリティのためにポート7741は閉じられます。

18 | P a g e


ページ 22: セクション 10.2

Page 22: Section 10.2


10.2 ATM Unit Operation

10.2 ATMユニット運用


Important Note:

重要事項:


The ATM unit connects exclusively via VPN. (Port 7742)

ATMユニットはVPNを介してのみ接続します。(ポート7742)


Each ATM is provisioned with its own unique VPN configuration for secure communication with Coinhub CAS. The ATM unit continuously transmits operational data to Coinhub CAS, even when no transactions are occurring. If a VPN configuration is detected as compromised, Coinhub CAS will automatically block the affected ATM unit to maintain system integrity.
各ATMは、Coinhub CASとのセキュアな通信のために、固有のVPN設定でプロビジョニングされます。ATMユニットは、トランザクションが発生していない場合でも、運用データをCoinhub CASに継続的に送信します。VPN設定が侵害されたと検出された場合、Coinhub CASはシステム整合性を維持するために、影響を受けるATMユニットを自動的にブロックします。

19 | P a g e


ページ 23: 最終ページ

Page 23: Final Page


20 | P a g e

