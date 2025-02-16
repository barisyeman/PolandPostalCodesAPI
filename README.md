# PolandPostalCodesAPI & ZIP Codes
Free Poland Address &amp; Postal Code API in NodeJS&amp;MySQL
# Address API

A simple REST API built with Node.js, Express, and MySQL to fetch address data based on postal codes.

## Features
- Fetch all addresses
- Fetch an address by postal code
- Uses MySQL as the database
- Environment variables for secure configuration

## Installation

```sh
git clone https://github.com/barisyeman/PolandPostalCodesAPI
cd address-api
npm install
```

## Configuration

Create a `.env` file in the root directory and set your database credentials:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=your_database
PORT=3000
```

## Usage

### Start the server
```sh
node server.js
```
Or use nodemon for automatic restarts:
```sh
npx nodemon server.js
```

### API Endpoints

- Get all addresses:
  ```
  GET /api/all
  ```
- Get address by postal code:
  ```
  GET /api/{postal_code}
  ```
  Example:
  ```
  GET /api/01-001
  ```

## License
This project is licensed under the MIT License.

---

# Address API (Polski)

Proste REST API zbudowane w Node.js, Express i MySQL do pobierania danych adresowych na podstawie kodów pocztowych.

## Funkcje
- Pobieranie wszystkich adresów
- Pobieranie adresu na podstawie kodu pocztowego
- MySQL jako baza danych
- Użycie zmiennych środowiskowych dla bezpiecznej konfiguracji

## Instalacja

```sh
git clone https://github.com/barisyeman/PolandPostalCodesAPI
cd address-api
npm install
```

## Konfiguracja

Utwórz plik `.env` w katalogu głównym i ustaw dane dostępowe do bazy danych:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=twoje_haslo
DB_NAME=twoja_baza
PORT=3000
```

## Użycie

### Uruchomienie serwera
```sh
node server.js
```
Lub użyj nodemon do automatycznych restartów:
```sh
npx nodemon server.js
```

### Endpointy API

- Pobierz wszystkie adresy:
  ```
  GET /api/all
  ```
- Pobierz adres na podstawie kodu pocztowego:
  ```
  GET /api/{postal_code}
  ```
  Przykład:
  ```
  GET /api/34000
  ```

## Licencja
Ten projekt jest licencjonowany na podstawie licencji MIT.

