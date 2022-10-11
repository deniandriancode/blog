---
title: "What is base-devel in Arch Linux?"
date: 2022-10-11T22:55:43+07:00
tags: ["linux", "arch", "development", "x86_64"]
author: ["deniandriancode"]
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: ""
disableShare: false
disableHLJS: true
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: false
cover:
    image: "<image path/url>" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: false # only hide on current single page
editPost:
    URL: "https://github.com/deniandriancode/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---

# Package Group  

When installing software in [Arch Linux](https://archlinux.org), the [pacman](https://wiki.archlinux.org/title/Pacman) package manager will grabs the package we specified along with its dependencies, it then will install the software and its dependencies on our machine. Some packages belong to a group of packages that can all be installed simultaneously. For example, issuing the command:

```
# pacman -S gnome
```

will prompt you to select the packages from the gnome group that you wish to install.

Same goes to `base-devel` group, so to install it, use:
```
# pacman -S base-devel
```
`base-devel` is a package group that includes tools needed for building (compiling and linking). That is, most of the time you will not needed to install this since Arch Linux is a binary based distribution so user doesn't need to compile the package by their own (which is time consuming, especially for larger programs), this is the opposite with [source based distribution](https://en.wikipedia.org/wiki/Category:Source-based_Linux_distributions) like [Gentoo](https://www.gentoo.org/) where user needs to compile the package by their own.

# List of Packages  

There are total of 27 packages in `base-devel` package group, the following are the list of the packages:  
- archlinux-keyring
- autoconf
- automake
- binutils
- bison
- debugedit
- fakeroot
- file
- findutils
- flex
- gawk
- gcc
- gettext
- grep
- groff
- gzip
- libtool
- m4
- make
- manjaro-keyring
- pacman
- patch
- pkgconf
- sed
- sudo
- texinfo
- which

you can see the package list [here](https://archlinux.org/groups/x86_64/base-devel/) or issuing the following command:
```
# pacman -Sg base-devel
```

# Summary  
Sometimes a package group will contain a large amount of packages, and there may be only a few that you do or do not want to install. Instead of having to enter all the numbers except the ones you do not want, it is sometimes more convenient to select or exclude packages or ranges of packages with the following syntax:

```
Enter a selection (default=all): 1-10 15
```
which will select packages 1 through 10 and 15 for installation, or:

```
Enter a selection (default=all): ^5-8 ^2
```
which will select all packages except 5 through 8 and 2 for installation.

> **Note**  
> If a package in the list is already installed on the system, it will be reinstalled even if it is already up-to-date. This behavior can be overridden with the ```--needed``` option.

___
**Reference**
- Arch Wiki - [https://wiki.archlinux.org](https://wiki.archlinux.org)
- What does base-devel mean when installing Arch? - [https://bbs.archlinux.org/viewtopic.php?id=227602](https://bbs.archlinux.org/viewtopic.php?id=227602)
