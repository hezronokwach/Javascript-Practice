function blockChain(data, prev){
    const prevBlock = prev || {
        
            index: 0,
            hash : "0",
            data : {},
            prev : null,
            chain : function(newData){
                return blockChain(newData,this)
            }
        
        }
    
    const index = prevBlock.index + 1;
    const concatData = index + prevBlock.hash + JSON.stringify(data);
    const newBlock = {
        index: index,
        hash : hashCode(concatData),
        data : data,
        prev : prevBlock,
        chain : function(newData){
            return blockChain(newData,this)
        }

    }
    return newBlock;
}

const hashCode = str =>
    (
      [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
    ).toString(36)

function chain(data){

}
 const first = blockChain({ a: 1 })


const second = first.chain({ hello: 'world' })
// console.log(second.hash) //                           -> '18drvvc'
// console.log(hashCode('21103f27{"hello":"world"}')) // -> '18drvvc'

 const chain2 = second
  .chain({ value: 4455 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' })

const fork = second
  .chain({ value: 335 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' })

console.log(chain2.hash) //  -> '1qr3qfs'
console.log(fork.hash) //   -> '1x9gsc1'
console.log(chain2.index) // -> 5
console.log(fork.index) //  -> 5


