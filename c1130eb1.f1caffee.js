(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),o=(a(0),a(92)),s={id:"doc5",title:"The Great Chia Glossary"},r={unversionedId:"doc5",id:"doc5",isDocsHomePage:!1,title:"The Great Chia Glossary",description:"This guide will act as a glossary for many of the concepts utilized in Chia.",source:"@site/docs/doc5.md",permalink:"/docs/doc5",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/master/docs/doc5.md",sidebar:"someSidebar",previous:{title:"4 - The Compiler and Other Useful Information",permalink:"/docs/doc4"}},c=[],l={rightToc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide will act as a glossary for many of the concepts utilized in Chia.\nIf you are familiar with how Bitcoin transactions work, a lot of this will be familiar."),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Coin (TXO/transaction output)")," - A coin stores value. All coins are generated as the output of a transaction or a coinbase reward or fee target. A coin is spent exactly once, allowing its value to go into other coins, and is then permanently destroyed. Each unspent coin is locked with a ChiaLisp program which is that coin\u2019s puzzle, and whoever has the information to solve that puzzle is the person who can spend that coin. The most basic puzzle has a public key and accepts a solution which contains a list of conditions signed by the corresponding private key, so only the owner of the private key can unlock the coin and spend it.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Unspent Coin (UTXO/unspent transaction output)")," - A coin which has been created but not yet spent and hence is storing value.\nUnspents (UTXO set/unspent transaction output set) - This is the set of all unspent coins on the network. It is used to check if a transaction is valid, acting as a lookup for the puzzles. It maps a coin ID to a birthdate in blockheight. A transaction must contain a reveal of the information used to calculate the ID in order for it to be possible to validate because the unspents doesn\u2019t contain that information, only hashes which can be used to validate it.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Coin ID/CoinName (TXO ID/transaction output ID)")," - The ID of a coin in Chia is generated by hashing the primary input ID, puzzle hash, and amount concatenated in that order. This is very different from Bitcoin which uses much more data to form the TXO ID, restricting what smart contracts are capable of. (See also: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/SegWit"}),"SegWit"),")")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Primary Input/Parent")," - When a coin is created the coin that was used as input in the transaction is designated as the primary input. This is used to create the coin ID. If more that one coin is used up as an input in a transaction then one of the coins is designated the primary input, and the others simply reinforce the transaction.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Spend/CoinSolution")," - A spend is a reveal of a coin's ID, along with the full puzzle code, and a solution to be ran with the puzzle. The result of a spend is determined by the returned Op Constraints after running the puzzle with the solution.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Spend Bundle")," - A spend bundle is a collection of spends grouped together with an aggregated signature to be sent to the network.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"ChiaLisp")," - ChiaLisp is the Turing-complete functional language which the puzzles for spending coin are programmed in. For more information see our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/"}),"CLVM Guide"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Puzzle (Scriptpubkey)")," - A ChiaLisp program which specifies the behaviour of a coin when it is spent. A puzzle can either reject a solution or output a set of constraints.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Solution (Scriptsig)")," - This is some ChiaLisp which is passed to the puzzle for evaluation when a transaction is submitted. For more information about how transactions work, and how solutions can generate new coins check out this ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/doc2"}),"guide"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"CLVM")," - The CLVM is the ChiaLisp Virtual Machine which is the sandboxed environment that puzzles and solutions are run in. The CLVM only runs the compiled minimal version of ChiaLisp, though a compiler can convert the higher level ChiaLisp to the compiled minimal version. See more about that ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/doc4"}),"here"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Aggregated Signature/AggSig")," - Aggregated Signatures allow us to condense multiple signatures into a single aggregated signature, such that if we know a public key and value we can verify if it exists inside of the single aggregate. This uses BLS non-interactive aggregation.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Prepend Signature")," - Prepend signatures are used so that we can retain metadata about the structure of an aggregated signature. TODO: Expand")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Op Constraints/Conditions")," - Constraints are returned by the puzzle when it\u2019s passed the solution. If all of the returned conditions are met then a transaction is valid.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"AGG_SIG - ","[50]"," - (50 0xpubkey 0xmessage)"),": This spend is only valid if the aggregated signature in this block contains a signature from the given public key of the given message.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"CREATE_COIN - ","[51]"," - (51 0xpuzzlehash amount)"),": If this spend is valid then create a new coin with the given puzzlehash and amount.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"ASSERT_COIN_CONSUMED - ","[52]"," - (52 0xcoinID)"),": This spend is only valid if the given Coin ID has also been spent in this block.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"ASSERT_MY_COIN_ID - ","[53]"," - (53 0xcoinID)"),": This spend is only valid if the presented coin ID is exactly the same as the ID of the coin that contains this puzzle.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"ASSERT_MIN_TIME - ","[54]"," - (54 time)"),": This spend is only valid if the given time has passed.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"ASSERT_BLOCK_INDEX_EXCEEDS - ","[55]"," - (55 block_index)"),": The spend is only valid if the given block_index has been reached.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"ASSERT_BLOCK_AGE_EXCEEDS - ","[56]"," - (56 block_age)"),": The spend is only valid if the block has existed for the given amount of time.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"AGG_SIG_ME - ","[57]"," - (57 0xpubkey 0xdatahash)"),":  The spend is only valid if the pubkey signs a message in the form (message concatenated with coin ID).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"ASSERT_FEE - ","[58]"," - (58 )"),": TODO: how does assert fee work?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Wallet")," - Software written to interact with transactions. Chia uses Hierarchical Deterministic Wallets (HD Wallets). This means that they can generate many different public keys that are all valid and verifiable as unique to that wallet. A wallet contains a coin if it possesses the information necessary to unlock that coin and create a transaction which spends it.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Puzzle Generator")," - A wallet will use a Puzzle Generator to define how it wants to receive transactions. Most wallets will want to generate the standard transaction, however by storing a ChiaLisp program that generate a puzzle, all a Sending Wallet needs to do is ask the Recipient Wallet what its Program Generator is and then run that to create the puzzle to lock the coin up with.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Puzzle Generator ID")," - This is the hash of a wallet's puzzle generator. A wallet can do a hash-lookup and see if it already knows the source code for that puzzle generator. If not, it will request the full source code and store that information in its lookup table.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Smart Contract")," - A smart contract is a specialised ChiaLisp puzzle which locks a coin up and enables complex blockchain interactions.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Coloured Coins")," - Coloured Coins are a special kind of chia coin which are created by users. A coloured coin is a uniquely marked subset of chia which can't be forged and can be linked to other assets.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Authorized Payees")," - Authorized Payees is a smart contract that means that Wallet A can give Wallet B some money, but Wallet B is only allowed to spend that money in ways that Wallet A has explicitly authorised.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Decentralised ID")," - A decentralised ID is a smart contract that enables a wallet to act as an ID which can create messages to other IDs. Based on the work of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://identity.foundation/"}),"identity foundation"),"."))))}p.isMDXComponent=!0}}]);