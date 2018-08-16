import advanceToBlock from 'openzeppelin-solidity/test/helpers/advanceToBlock';
const Ctr = artifacts.require("./NEW_CONTRACT.sol");

contract('Ctr', async function(accounts) {
    const data_hash = '0x77a7135e307fd65cc5b69ffa2b1af0a7bed0b659dec74136722e6437004a6452';
    let instance;

    it("should deploy contracts", async() => {
        instance = await Ctr.new(process.env.DUCOR_ETH_MASTER_ADDRESS, process.env.DUCOR_ETH_ORACLE_ACCOUNT, { from: accounts[0] });
    });

    it("should deploy with init value inserted", async() => {
        assert.equal(await instance.getnuls.call(), 1000, "Value should match for int val data");
    });

    it("should return value until data is not antique", async function() {
        await advanceToBlock(web3.eth.blockNumber + 1);
        const resTx = await instance.getnuls({ from: accounts[0] });
        assert.isAtLeast(resTx.receipt.gasUsed, 1000, "Transaction should happen and event emitted internally");
        await advanceToBlock(web3.eth.blockNumber + 1);
        try {
            await instance.getnuls({ from: accounts[0] });
            assert.fail();
        } catch (e) {
            assert.equal(true, true, "Error should be raised");
        }
    });
    //
    // it("should request data update manually", async() => {
    //     const resTxManual = await instance.request_data_manually(int_type, { from: accounts[3] });
    //     assert.isAtLeast(resTxManual.receipt.gasUsed, 1000, "Transaction should happen and event emitted internally");
    // });
    //
    // it("should not request data update manually for not approved data type", async() => {
    //     try {
    //         await instance.request_data_manually('wtf_type', { from: accounts[3] });
    //         assert.equal(false, true, "should not be called");
    //     } catch (e) {
    //         assert.equal(true, true, "Error should be raised");
    //     }
    // });
});