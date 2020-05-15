# F I R E

## Project Description

Fire is a portal for education, information, and reference of cannabis strains and their utilities. Through an intuitive interface, visitors are invited to explore a curated database of popular strains.

## Wireframes

**Home Page**  
![Home Page](/planning/readme-images/home-page-wireframe-png.png)  
**Show Page**  
![Information Page](/planning/readme-images/information-page-wireframe-png.png)

## MVP User Stories

_**MVP User Stories**_

- _As a user, I visited Fire for referencing a particular strain I was interested in._
- _As a user, I am interested in understanding the use of cannabis for physical and emotional wellness._
- _As a user, I am interested in breaking mis-informed social stigmas through self-education on the subject matter._

_**Post MVP Stretch Goals**_

- _User authentication._
- _Creating user profiles with editable lists of preferred items._
- _Adding information for each strain about the ideal climate for seed propagation._
- _Create shopping experience for (legally) authorized users to search products and purchase them._
- _Extend database items to edibles and other cannabis-based products._

## Database reference:

_https://www.leafly.com/start-exploring_

#### Database Sample Object

```json
{
	"id": 1,
	"name": "Granddaddy Purple",
	"type": "Indica",
	"dominance": "THC",
	"img": "https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fflower-images%2Fgranddaddy-purple.png?w=440&h=440&auto=format&fit=crop&dpr=2&q=25&ixlib=js-2.3.1&s=b07293ad297e0e9bcdfcce33e146750d",
	"effect": "calming",
	"terpeness": ["Herbal", "Peppery", "Pine"]
}
```

## Component Hierarchy

![Component Hierarchy](/planning/readme-images/component-tree-wireframe-png.png)

#### Component Details

| Component                    | State/Props |
| ---------------------------- | :---------: |
| App                          |    State    |
| Header                       |    Props    |
| Nav Bar                      |    Props    |
| Home                         |    Props    |
| Categories                   |    Props    |
| Popular Strains Galleries    |    Props    |
| All Strains Galleries        |    Props    |
| Strain Information Show Page |    State    |
| Footer                       |     N/A     |
