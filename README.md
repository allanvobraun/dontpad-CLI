


[![MIT License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/github_username/repo">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Dontpad CLI</h3>

  <p align="center">
    A command line interface for <a href="http://dontpad.com">dontpad.com</a>
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)
- [Special thanks](#special-thanks)



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="https://i.imgur.com/hr6rQGn.png"> 

Dontpad CLI is a command line interface for writing and sharing notes direct from your console.

<!-- GETTING STARTED -->
## Getting Started

To get yourself Dontpad CLI, follow these simple steps.

### Prerequisites

NodeJS and npm are required to install Dontpad CLI.  
You download node and npm [here](https://nodejs.org/en/).

After installation run:

```sh
npm install npm@latest -g
```
For update npm.
### Installation
 
1. Install the package
```sh
npm install --global dontpad-cli
```
2. Check the installation
```sh
dontpad --version
```
You should see the version on console.


<!-- USAGE EXAMPLES -->
## Usage
<a href="https://imgur.com/1iGNrbw"><img src="https://i.imgur.com/1iGNrbw.gif" title="source: imgur.com" /></a>

----------
To read all the commands and options simple run:
```sh
dontpad --help
```
Commands:
----
| Command | Description                                               | Usage                 |
|---------|-----------------------------------------------------------|-----------------------|
|         | Empty command, append text to a repository                | dontpad 'text' [args] |
| get     | Read information from a repository and prints on terminal |  dontpad get [args]   |
----
General options:
----
| Option             | Description                                                                              | Default          |
|--------------------|------------------------------------------------------------------------------------------|------------------|
| --help             | Show help                                                                                | None             |
| --version          | Show version                                                                             | None             |
| -r or --repository | Specify the dontpad repository                                                           | System user name |
| -s or --separator  | Specify a string separator between appends                                               | \n               |
| -o or --overwrite  | Overwrite all content in the repository                                                  | false            |
| -c or --copy         | Copy the last line from the repository to the clipboard (only disponible with get command) | false            |


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Allan Braun - allanvobraun@gmail.com

Project Link: [https://github.com/allanvobraun/dontpad-CLI](https://github.com/allanvobraun/dontpad-CLI)

NPM Link: [https://www.npmjs.com/package/dontpad-cli](https://www.npmjs.com/package/dontpad-cli)

## Special thanks
* Mum
* [Matheus Bertho](https://github.com/Berthot) for features ideas
* [Willian Ferreira](https://github.com/willianhf) for js help


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
