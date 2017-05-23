# `@orodio/uuid`

[![Build Status](https://travis-ci.org/orodio/uuid.svg?branch=master)](https://travis-ci.org/orodio/uuid)

### Install

```
yarn add @orodio/uuid
```

### Use

```
import uuid from "@orodio/uuid"

const a = uuid() // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
const b = uuid() // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

a === b // false

// where x = [0-9a-z]

```

### Dev

```
$ make               # see make help
$ make help          # shows all the make commands
$ make build         # build stuff puts it in /lib
$ make build-watch   # make build but all the time
$ make test          # tests the stuff
$ make test-watch    # make test but all the time
$ make version       # creates a patch tag
$ make version-minor # creates a minor tag
$ make version-major # creates a major tag
$ make publish       # publishes the module
```
