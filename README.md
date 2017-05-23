# `@orodio/counter`

### Install

```
yarn add @orodio/counter
```

### Types
```
Id    :: String
Title :: String
Count :: Number
Date  :: String

Counter :: {
  id:        Id,
  title:     Title,
  count:     Count,
  createdAt: Date,
  updatedAt: Date,
}

Response a :: Promise a

counters           :: () -> Response { counters: [Counter] }
counter            :: Id -> Response { counter: Counter }
createCounter      :: { title: Title, count?: Count } -> Response { counter: Counter }
updateCounterCount :: (Id, Count) -> Response { counter: Counter }
updateCounterTitle :: (Id, Title) -> Response { counter: Counter }
deleteCounter      :: Id -> Response { counter: Counter }

Stream a :: Observable a

counters$ :: () -> Stream { counters: [Counter] }
counter$  :: id -> Stream { counter: Counter }
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
