# ChainBrowse- Concept

As the name indicates, ChainBrowse enables webbrowsing out of a blockchain. That‘s make it possible to attach payments to specific conditions based on web content. Unfortunately the Etherum Platform by itself doesn't provide this capability. Indeed, current technologies such as ChainLink can fetch data outside a smart contract, but they are limited on some few API's. That is were ChainBrowse comes in- you can literally fetch any information on the internet onto your smart contract. ChainBrowse is even able to interact with websites like user would do- e.g. doing logins and writing comments. Also, there is the possibility to find a consensus beetween different internet sources.

How it works:

Let's assume you want to make a bet on a score of a football match with a stranger using a smart contract. Due to the fact that our bet relates to an very insignificant local football match, there is most likely no API that can validate the outcome of that match. We need to have a different approach using ChainBrowse. 

Therefore we open an Application called "Puppetry" which enables us to automate browser tasks just by recording a reference browser session. Later we will save this record and deploy it onto our smart contract that will run it on a specific date. 

Our reference record looks as follows:

Knowing that the local football league usually posts the scores, we go onto their website at first. 

Now, we somehow need to extract the score of our match we bet on. Therefore we need to find a pattern in the html code. It's the following: The second line in the score table is always the one containing the score value we need, that's why we simply click on the score value in the second line to set this span object as a target point. 

At this point we can stop the recording and export our project and deploy it to our smart contract using a frontend environment. Once it is uploaded, both parties can observe, download and run the code on their own computer to verify it's trustworthness. 

If both parties agree, they can deposit their funds.

But now you may wonder how can this script be excecuted on the smart contract? For this we leverage the iExec Platform. iExec basically a decentralized cloud computing service that allows to run docker containers from a smart contract- so called dOracles. As well as the iExec platform as well as the ChainBrowse docker container are both open source so we can fully trust on them. 

When the time has come our smart contract calls our dOracle- the actual ChainBrowser. The deployed script and the name of the target point are set as it's parameters in order to really get the score as the returned result.

If we have done everything correctly the application returns the score and our smart contract will run properly. 

If we are worrying false or no scores at all from some sources, we can rely on the consensus princple as well. Therefore we might take the local newspaper one of teams as additional sources to deliver multiple score values. 

That was only one example of many possible usecases. Further usecases could be Crypto-Fiat exchages, where a proof that a payment was actually received is needed. However, therefore we need to find a way to threat captchas or to avoid them at least. First may be done by temporarily sharing the browser screen. 

To illustrate the way BrowseChain works I've created this scheme- it's related to the football match example but with consensus:

![Untitled 1](/Users/macbook/Desktop/Untitled 1.png)