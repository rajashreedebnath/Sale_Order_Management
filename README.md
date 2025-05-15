# 📦 Sale Order Management App

A frontend-only Sale Order Management Single Page Application (SPA) built with React, Chakra UI, and React Hook Form. This application allows users to manage active and completed sale orders with an intuitive interface, dark theme support, and form validations.

---

## 🚀 Login Data

- **Username**: `admin`
- **Password**: `password`

---

## 📖 Project Overview

A consumer goods manufacturing company needs to manage product inventory sales via sale orders for compliance and record-keeping. This application provides:

- **User authentication (dummy login)**
- **Dark/light theme toggle with persistent setting**
- **Tabbed interface for Active and Completed Sale Orders**
- **Modal-based forms for creating and editing sale orders**
- **Product multi-select in forms**
- **Form validations and date picker integration**
- **Sale orders listing with edit options (active) and read-only views (completed)**

---

## 📸 Wireframe Reference

Based on provided assignment wireframes featuring:
- Sale order listing tables
- "+ Sale Order" button triggering a form modal
- Edit options via a triple-dot icon with modal
- Tabs to switch between Active and Completed orders

---

## 📚 Tech Stack

- **React 18+**
- **React Router DOM (latest)**
- **TanStack React Query**
- **React Hook Form**
- **Chakra UI**
- **Chakra MultiSelect (or compatible Chakra-compatible multi-select component)**

---

## ✨ Features

- Dummy Login Authentication
- Persistent Dark Theme Toggle
- Active & Completed Sale Order Tabs
- Modal Form to Add/Edit Sale Orders
- Product Multi-Select with Chakra MultiSelect
- Date Picker for Invoice Date
- Form Validations via React Hook Form
- Mocked API calls using TanStack React Query
- Live updates to Sale Order list without page refresh

---

## 📝 Data Schemas

### 📌 Customer Schema

```json
{
  "id": 11908,
  "name": "Ram",
  "color": [182, 73, 99],
  "email": "jesus_christ@church.com",
  "pincode": "Mumbai",
  "location_name": "Mumbai, Maharashtra, India",
  "type": "C",
  "profile_pic": null,
  "gst": ""
}




### 📌 Product Schema

{
  "id": 209,
  "display_id": 8,
  "owner": 1079,
  "name": "New Product",
  "category": "The god of War",
  "characteristics": "New Product Characteristics",
  "brand": "New Product Brand",
  "sku": [
    {
      "id": 248,
      "selling_price": 54,
      "max_retail_price": 44,
      "amount": 33,
      "unit": "kg",
      "quantity_in_inventory": 0,
      "product": 209
    }
    // additional SKUs...
  ],
  "updated_on": "2024-05-24T12:46:41.995873Z",
  "adding_date": "2024-05-24T12:46:41.995828Z"
}


### 📌 Sale Order Schema

{
  "customer_id": 11908,
  "items": [
    {
      "sku_id": 220,
      "price": 12,
      "quantity": 12
    }
  ],
  "paid": false,
  "invoice_no": "Invoice - 1212121",
  "invoice_date": "7/5/2024"
}
