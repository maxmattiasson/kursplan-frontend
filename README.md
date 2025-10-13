# Kursplan Frontend

Projektet går ut på att förbättra hur Chas Academy presenterar kursplaneringar för studenter och lärare.

Vi ska skapa en modern, interaktiv sida som ersätter nuvarande Excel-filer.

## Tekniker

- HTML5 - Struktur
- CSS3 - Design och layout
- JavaScript - Interaktivitet

## Design

- **Mobile first** - sidan är byggd för att fungera först och främst på mobil, med responsiv anpassning för större skärmar.
- **Färgschema** - Vi har valt ett färgschema utifrån Chas Academys färger.
  `--primary-color:` `rgb(53, 100, 145)` ![#356491](https://img.shields.io/badge/-%23356491.svg?style=flat-square&labelColor=%23356491&color=%23356491)
  `--secondary-color:` `rgb(76, 100, 255)` ![#4C64FF](https://img.shields.io/badge/-%234C64FF.svg?style=flat-square&labelColor=%234C64FF&color=%234C64FF)
  `--accent-color:` `rgb(30, 37, 81)` ![#1E2551](https://img.shields.io/badge/-%231E2551.svg?style=flat-square&labelColor=%231E2551&color=%231E2551)
  `--gray-color:` `rgb(123, 124, 129)` ![#7B7C81](https://img.shields.io/badge/-%237B7C81.svg?style=flat-square&labelColor=%237B7C81&color=%237B7C81)

## Roller i teamet

| Namn             | Roll          | Ansvar                                                                  |
| ---------------- | ------------- | ----------------------------------------------------------------------- |
| Max Mattiasson   | Projektägare  | Håller koll på helheten, ansvarar för GitHub och merges till main.      |
| Elias Johansson  | Scrum Master  | Leder standups, håller tempo i teamet och sätter timer vid möten.       |
| Alyanna Karlsson | Desigansvarig | Tar fram layout och ser till att sidan känns enhetlig.                  |
| Sascha Bergenås  | Utvecklare    | Deltar i kodning, bidrar till funktioner och hjälper till med struktur. |
| Björn Boman      | Utvecklare    | Deltar i kodning, bidrar till funktioner och hjälper till med struktur. |
| Isabelle Franzén | Utvecklare    | Deltar i kodning, bidrar till funktioner och hjälper till med struktur. |

## Arbetsflöde

Vi arbetar i en gemensam GitHub-repo med följande struktur:

- `main` - Produktionsbranch
- `dev` - Mellanlager mellan main och feature-branches.
- feature-brancher för nya delar (`feat/header`, `feat/footer` osv.)
