import { expectType, expectAssignable } from 'tsd'

import templateTypeScript, { type Options } from 'template-typescript'

expectType<object>(templateTypeScript(true))

templateTypeScript(true, {})
expectAssignable<Options>({})
