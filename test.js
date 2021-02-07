import sum from './sum.js'
import t from 'assert-op'

t`simple sum`( a => {
	a`===`( sum([1,2,3]), 6 )
	a`===`( sum([1,2,3], v=>v), 6 )
})
t('complex sum', a => {
	a('===', sum([1,2,3], v=>2*v), 12)
	a('===', sum([1,2,3], (v,i)=>v+i), 9)
})
