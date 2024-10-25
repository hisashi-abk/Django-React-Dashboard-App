# Django React Dashboard App

[日本語版](#japanese) | [English](#english)

<a id="english"></a>

## Overview

A modern dashboard application built with Django and React, featuring drag-and-drop chart rearrangement functionality. This project is inspired by [Django-React-Dashboard-App](https://github.com/NickMol/Django-React-Dashboard-App) but includes several enhancements and modern technology choices.

## Features

- **Modern Tech Stack**: Django backend with React + Vite frontend using TypeScript
- **Responsive Design**: Built with TailwindCSS and DaisyUI for a modern, clean interface
- **Interactive Dashboard**: Drag-and-drop functionality for customizable chart layouts
- **Real-time Updates**: Dynamic data visualization with interactive charts
- **Type Safety**: Enhanced reliability with TypeScript implementation

## Technology Stack

### Backend

- Django
- Django REST Framework
- Python

### Frontend

- React
- Vite
- TypeScript (upgraded from JavaScript)
- TailwindCSS
- DaisyUI

## Getting Started

### Prerequisites

- Python 3.11+
- Node.js 22+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/hisashi-abk/Django-React-Dashboard-App
cd https://github.com/hisashi-abk/Django-React-Dashboard-App
```

2. Backend Setup

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
```

3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Acknowledgments

This project is based on [Django-React-Dashboard-App](https://github.com/NickMol/Django-React-Dashboard-App) by NickMol, with the following enhancements:

- Migration from JavaScript to TypeScript
- Integration of TailwindCSS and DaisyUI
- Addition of drag-and-drop functionality for charts

---

<a id="japanese"></a>

# Django React ダッシュボードアプリ

## 概要

Django と React で構築された最新のダッシュボードアプリケーションです。チャートのドラッグ&ドロップによる再配置機能を備えています。このプロジェクトは[Django-React-Dashboard-App](https://github.com/NickMol/Django-React-Dashboard-App)を参考に、さまざまな機能強化と最新技術の採用を行っています。

## 特徴

- **最新の技術スタック**: Django バックエンドと React + Vite フロントエンド（TypeScript 使用）
- **レスポンシブデザイン**: TailwindCSS と DaisyUI を使用したモダンでクリーンなインターフェース
- **インタラクティブダッシュボード**: チャートレイアウトをカスタマイズできるドラッグ&ドロップ機能
- **リアルタイム更新**: インタラクティブなチャートによる動的データの可視化
- **型安全性**: TypeScript の導入による信頼性の向上

## 技術スタック

### バックエンド

- Django
- Django REST Framework
- Python

### フロントエンド

- React
- Vite
- TypeScript（JavaScript からアップグレード）
- TailwindCSS
- DaisyUI

## 始め方

### 必要条件

- Python 3.8 以上
- Node.js 16 以上
- npm または yarn

### インストール手順

1. リポジトリのクローン

```bash
git clone https://github.com/hisashi-abk/Django-React-Dashboard-App
cd https://github.com/hisashi-abk/Django-React-Dashboard-App
```

2. バックエンドのセットアップ

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
```

3. フロントエンドのセットアップ

```bash
cd frontend
npm install
npm run dev
```

## 謝辞

このプロジェクトは、NickMol 氏の[Django-React-Dashboard-App](https://github.com/NickMol/Django-React-Dashboard-App)をベースに、以下の拡張を加えています：

- JavaScript から TypeScript への移行
- TailwindCSS と DaisyUI の統合
- チャートのドラッグ&ドロップ機能の追加
