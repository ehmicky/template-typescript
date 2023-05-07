import templateName, { type Options } from 'template-name'
import { expectType, expectAssignable } from 'tsd'


expectType<unknown>(templateName(true))

templateName(true, {})
expectAssignable<Options>({})
