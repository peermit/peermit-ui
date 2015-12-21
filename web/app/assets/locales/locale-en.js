 module.exports = {
    languages: {
        en: "English",
        cn: "简体中文",
        fr: "Français",
        ko: "한국어",
        de: "Deutsch",
        es: "Español",
        tr: "Turkish"

    },
    header: {
        title: "BitShares 2.0",
        account: "Account",
        dashboard: "Dashboard",
        explorer: "Explore",
        exchange: "Trade",
        payments: "Transfer", // temporary, once we have tabs on Payments, I'll change it back to payments (Valentine)
        logout: "Logout",
        settings: "Settings",
        current: "Current Account",
        create_account: "Create Account",
        create_asset: "Create Asset",
        update_asset: "Update Asset",
        lock: "Lock",
        unlock: "Unlock",
        help: "Help",
        locked_tip: "Wallet is locked.<br/>Click to unlock.",
        unlocked_tip: "Wallet is unlocked.<br/>Click to lock."
    },
    operation: {
        pending: "pending %(blocks)s blocks",
        no_recent: "No recent transactions"
    },
    propose: "propose",
    cancel: "cancel",
    account: {
        welcome: "Welcome to BitShares 2.0",
        asset: "Asset",
        market_value: "Market Value",
        hour_24: "24hr Change",
        recent: "Recent activity",
        name: "Account name",
        more: "see more",
        deposit_withdraw: "Deposit/Withdraw",
        as_collateral: "Collateral",
        open_orders: "Open orders",
        total_value: "Total value",
        member: {
            stats: "Membership",
            join: "Joined on",
            registrar: "Registrar",
            referrer: "Affiliate Referrer",
            lifetime_referrer: "Lifetime Referrer",
            network_percentage: "Network",
            fee_allocation: "Fee Allocation",
            membership: "Membership",
            fees_paid: "Lifetime fees paid",
            fees_pending: "Pending fees",
            fees_vested: "Pending vested fees",
            referrals: "Referrals",
            rewards: "Cashback Rewards",
            cashback: "Vesting cashback balance",
            vested: "Vested",
            unknown: "Unknown member",
            lifetime: "Lifetime member",
            basic: "Basic member",
            annual: "Annual subscriber",
            upgrade_lifetime: "Buy Lifetime Subscription",
            subscribe: "Buy Annual Subscription",
            expires: "expires",
            membership_expiration: "Membership Expiration",
            fees_cashback: "Fees and cashback"
        },
        user_issued_assets: {
            symbol: "Symbol",
            name: "Asset Name",
            description: "Description",
            max_supply: "Maximum supply",
            precision: "Precision",
            to: "Issue to account",
            market_fee: "Market fee",
            max_market_fee: "Max market fee",
            details: "Details",
            primary: "Primary settings",
            optional: "Optional settings",
            approx_fee: "Approximate fee",
            exists: "That asset already exists",
            max_positive: "Max supply should be a positive number",
            core_exchange_rate: "Core exchange rate",
            quote: "Quote asset amount",
            quote_name: "Quote asset",
            base: "Base asset amount",
            base_name: "Base asset",
            update_owner: "Update owner",
            current_issuer: "Current owner account",
            new_issuer: "New owner account",
            flags: "Flags",
            charge_market_fee: "Enable market fee",
            override_authority: "Issuer may transfer asset back to himself",
            transfer_restricted: "Issuer must approve all transfers",
            disable_confidential: "Disable confidential transactions",
            white_list: "Require holders to be white-listed",
            witness_fed_asset: "Allow witnesses to provide feeds",
            committee_fed_asset: "Allow committee members to provide feeds",
            disable_force_settle: "Disable force settling",
            global_settle: "Allow issuer to force a global settling",
            advanced: "Advanced",
            need_asset: "At least one of the two assets must be %(name)s",
            perm_warning: "WARNING: Permissions may only be disabled, once disabled they may not be reactivated!!",
            issued_assets: "Issued Assets"
        },
        connections: {
            known: "Known by",
            "black": "Blacklisted by"
        },
        perm: {
            active: "Active Permissions",
            owner: "Owner Permissions",
            memo_key: "Memo key",
            publish: "Publish Changes",
            reset: "Reset Changes",
            add: "Add Permission",
            type: "Type",
            key: "Key/Name",
            weight: "Weight",
            threshold: "Threshold",
            confirm_add: "Add",
            cancel: "Cancel",
            add_permission_label: "Enter account name/key and weight",
            account_name_or_key: "Account name or key",
            memo_public_key: "Memo Public Key",
            warning1: "Active permissions weights total of %(weights_total)s should be equal or exceed threshold of %(threshold)s",
            warning2: "Owner permissions weights total of %(weights_total)s should be equal or exceed threshold of %(threshold)s",
            warning3: "Account is already in the list",
            warning4: "Key is already in the list",
            action: "Action",
            acct_or_key:" Account/Key"
        },
        votes: {
            proxy_short: "Proxy",
            workers_short: "Workers",
            proxy: "Proxy Voting Account",
            no_proxy: "No Proxy",
            clear_proxy: "Remove proxy",
            name: "Name",
            info: "Info",
            votes: "Votes",
            url: "Webpage",
            support: "Support",
            workers: "Budget Items",
            publish: "Publish Changes",
            add_witness: "Add",
            remove_witness: "Remove",
            remove_committee: "Remove",
            add_committee: "Add",
            add_committee_label: "Committee Member",
            add_witness_label: "Witness",
            approve_worker: "Approve worker proposal",
            reject_worker: "Reject worker proposal",
            worker_account: "Worker account",
            total_votes: "Total votes",
            votes_against: "Votes against",
            daily_pay: "Daily pay",
            max_pay: "Maximum total pay",
            unclaimed: "Unclaimed pay",
            status: {
                title: "Status",
                supported: "Supported",
                rejected: "Rejected",
                neutral: "Neutral"
            },
            start: "Start date",
            end: "End date"
        },
        options: {
            num_witnesses: "Desired Witnesses",
            num_committee: "Desired Committee Members",
            memo_key: "Memo Key"
        },
        upgrade: "Upgrade account",
        unfollow: "Unfollow",
        follow: "Follow",
        pay: "Pay",
        overview: "Overview",
        bts_market: "Market",
        history: "History",
        payees: "Payees",
        permissions: "Permissions",
        voting: "Voting",
        orders: "Orders",
        select_placeholder: "Select Account...",
        errors: {
            not_found: "The account %(name)s does not exist, are you sure you spelled it correctly?",
            invalid: "Invalid account name",
            unknown: "Unknown account",
            not_yours: "Not your account"
        },
        collaterals: "Collateral Positions",
        eq_value: "Equivalent Value",
        percent: "Percent of total supply",
        please_create_account: "Please create an account",
        create_account: "Create account",
        identicon: "Identicon",
        pay_from: "Pay From",
        existing_accounts: "Existing Accounts",
        name_input: {
            name_is_taken: "Account name is already taken.",
            not_found: "Account not found.",
            premium_name_faucet: "This is a premium name. Premium names are more expensive and can't be registered for free by faucet. Try to select another name containing at least one dash, number or no vowels.",
            premium_name_warning: "This is a premium name that is more expensive to register. Regular names have at least one dash, number or no vowels."
        },
        propose_from: "Propose From",
        settle: "Settle",
        "no_orders": "No open orders",
        asset_details: "Asset details"
    },
    pagination: {
        newer: "Newer",
        older: "Older"
    },
    transfer: {
        from: "From",
        pay_from: "Pay From",
        amount: "Amount",
        to: "To",
        memo: "Memo",
        fee: "Fee",
        send: "Send",
        final: "Final balance",
        balances: "Balances",
        available: "Available",
        errors: {
            req: "Required field",
            pos: "Amount must be positive",
            valid: "Please enter a valid, positive number",
            balance: "The final balance must be larger than 0",
            insufficient: "Insufficient Balance"
        },
        back: "BACK",
        confirm: "CONFIRM",
        broadcasting: "Broadcasting...",
        broadcast: "Your transfer has been broadcast to the network",
        again: "MAKE ANOTHER TRANSFER",
        see: "SEE MY TRANSFERS",
        close: "Close"
    },
    transaction: {
        confirm: "Please confirm the transaction",
        broadcast_success: "Transaction has been broadcast",
        transaction_confirmed: "Transaction confirmed",
        broadcast_fail: "Failed to broadcast the transaction: %(message)s",
        broadcasting: "Broadcasting transaction..",
        broadcasting_short: "Broadcasting..",
        sent: "sent",
        to: "to",
        received: "received",
        from: "from",
        amount_sell: "Amount to sell",
        expiration: "Expiration",
        fill_or: "Fill or kill",
        min_receive: "Minimum amount to receive",
        seller: "Seller",
        collateral: "Collateral",
        coll_ratio: "Initial collateral ratio",
        coll_maint: "Collateral maintenance ratio",
        "create_key": "Created a public key",
        reg_account: "Registered the account",
        was_reg_account: "registered by",
        create_asset: "created the asset",
        limit_order_sell: "placed order #%(num)s to sell %(sell_amount)s at ",
        limit_order_buy: "placed order #%(num)s to buy %(buy_amount)s at ",
        limit_order_cancel: "cancelled order",
        short_order: "Placed short order to sell",
        short_order_cancel: "Cancelled short ",
        at: "at",
        coll_of: "with collateral of",
        call_order_update: "updated margin position for ",
        lifetime_upgrade_account: "upgraded to lifetime member",
        annual_upgrade_account: "upgraded to annual member",
        update_account: "updated their account data",
        set_proxy: "set %(proxy)s as their voting proxy",
        whitelist_account: "Whitelisted the account",
        whitelisted_by: "Was whitelisted by the account",
        transfer_account: "Transferred the account",
        update_asset: "Updated the asset",
        update_feed_producers: "pdated the feed producers of asset",
        feed_producer: "Became a feed producer for the asset",
        feed_price: "Feed price",
        asset_issue: "issued",
        was_issued: "Was issued",
        by: "by",
        burn_asset: "Burnt",
        fund_pool: "funded %(asset)s fee pool with",
        asset_settle: "Requested settlement of",
        asset_global_settle: "Requested global settlement of",
        publish_feed: "published feed ",
        committee_member_create: "Created the committee member",
        witness_create: "Created the witness",
        witness_update: "Updated the witness",
        witness_pay: "Withdrew witness pay to account",
        witness_receive: "Received witness from witness",
        proposal_create: "Created a proposal",
        proposal_update: "Updated a proposal",
        proposal_delete: "Deleted a proposal",
        withdraw_permission_create: "Gave withdrawal permission for account",
        withdraw_permission_update: "Updated withdrawal permission for account",
        withdraw_permission_claim: "Claimed withdrawal permission for account",
        withdraw_permission_delete: "Deleted withdrawal permissions for account",
        paid: "paid",
        obtain: "to obtain",
        global_parameters_update: "Updated global parameters",
        file_write: "Wrote a file",
        vesting_balance_create: "created vesting balance of",
        for: "for",
        vesting_balance_withdraw: "Withdrew vesting balance of",
        bond_create_offer: "Created bond offer",
        bond_cancel_offer: "Cancelled bond offer",
        bond_accept_offer: "Accepted bond offer of",
        bond_claim_collateral: "Claimed collateral of",
        bond_pay_collateral: "Paid collateral of",
        create_worker: "Created a budget item with a pay of",
        custom: "Created a custom operation",
        order_id: "Order ID",
        balance_claim: "claimed a balance of %(balance_amount)s from balance ID #%(balance_id)s",
        asset_claim_fees: "claimed asset fees of %(balance_amount)s from %(asset)s fee pool",
        balance_owner: "Balance owner key",
        balance_id: "Balance ID",
        deposit_to: "Deposited to account",
        claimed: "Total claimed",
        borrow_amount: "Debt",
        funding_account: "Funding account",
        delta_collateral: "Collateral change",
        delta_debt: "Debt change",
        new_url: "Website",
        publisher: "Publisher",
        market_fee: "Market fee",
        max_market_fee: "Maximum market fee",
        blinding_factor: "Blinding factor",
        outputs: "Outputs",
        inputs: "Inputs",
        settlement_date: "Settlement date",
        trxTypes: {
            transfer: "Transfer",
            limit_order_create: "Place order",
            limit_order_cancel: "Cancel order",
            call_order_update: "Update margin",
            account_create: "Create account",
            account_update: "Update account",
            account_whitelist: "Account whitelist",
            account_upgrade: "Upgrade Account",
            account_transfer: "Transfer Account",
            asset_create: "Create asset",
            asset_update: "Update asset",
            asset_update_bitasset: "Update SmartCoin",
            asset_update_feed_producers: "Update asset feed producers",
            asset_issue: "Issue asset",
            asset_reserve: "Burn asset",
            asset_fund_fee_pool: "Fund asset fee pool",
            asset_settle: "Asset settlement",
            asset_global_settle: "Global asset settlement",
            asset_publish_feed: "Publish feed",
            committee_member_create: "Create committee member",
            committee_member_update : "Update committee member",
            witness_create: "Create witness",
            witness_update: "Update witness",
            witness_withdraw_pay: "Witness pay withdrawal",
            proposal_create: "Create proposal",
            proposal_update: "Update proposal",
            proposal_delete: "Delete proposal",
            withdraw_permission_create: "Create withdrawal permission",
            withdraw_permission_update: "Update withdrawal permission",
            withdraw_permission_claim: "Claim withdrawal permission",
            withdraw_permission_delete: "Delete withdrawal permission",
            fill_order: "Fill order",
            committee_member_update_global_parameters: "Global parameters update",
            vesting_balance_create: "Create vesting balance",
            vesting_balance_withdraw: "Withdraw vesting balance",
            worker_create: "Create budget item",
            custom: "Custom",
            assert: "Assert operation",
            balance_claim: "Claim balance",
            override_transfer: "Override transfer",
            transfer_to_blind: "Transfer to blinded account",
            blind_transfer: "Blinded transfer",
            transfer_from_blind: "Transfer from blinded account",
            asset_claim_fees: "Claim asset fees"
        },
        feeGroups : {
         general : "General",
         asset   : "Asset-Specific",
         market  : "Market-Specific",
         account : "Account-Specific",
         business: "Business Administration",
        },
        feeTypes: {
            _none : "Free of Charge",
            fee : "Regular Transaction Fee",
            price_per_kbyte: "Price per KByte Transaction Size",
            basic_fee : "Basic Fee",
            premium_fee : "Fee for Premium Names",
            membership_annual_fee : "Annual Membership",
            membership_lifetime_fee : "Lifetime Membership",
            symbol3 : "Symbols with 3 Characters",
            symbol4 : "Sybmols with 4 Characters",
            long_symbol : "Longer Symbols"
        }
    },
    explorer: {
        accounts: {
            title: "Accounts"
        },
        blocks: {
            title: "Blockchain",
            globals: "Global parameters",
            recent: "Recent blocks",
            trx: "Transaction",
            block_times: "Block times",
            block_time: "Block time",
            transactions: "# of transactions",
            recently_missed_blocks: "Recently missed blocks",
            trx_per_block: "Trx/block",
            active_committee_members: "Active committee members",
            active_witnesses: "Active Witnesses",
            avg_conf_time: "Average confirmation time",
            trx_per_sec: "Trx/s",
            last_block: "Last block",
            current_block: "Current Block"

        },
        block: {
            title: "Block",
            id: "Block ID",
            witness: "Witness",
            count: "Transaction count",
            date: "Date",
            time: "Time",
            previous: "Previous",
            previous_secret: "Previous secret",
            next_secret: "Next secret hash",
            op: "Operation",
            trx: "Transaction",
            op_type: "Operation type",
            fee_payer: "Fee paying account",
            key: "Public key",
            transactions: "Transaction count",
            account_upgrade: "Account to upgrade",
            lifetime: "Upgrade to lifetime member",
            authorizing_account: "Authorizing account",
            listed_account: "Listed account",
            new_listing: "New listing",
            asset_update: "Asset to update",
            common_options: "Common options",
            new_options: "New options",
            new_producers: "New feed producers",
            asset_issue: "Amount to issue",
            max_margin_period_sec: "Max margin period (s)",
            call_limit: "Call limit",
            short_limit: "Short limit",
            settlement_price: "Settlement price"
        },
        assets: {
            title: "Assets",
            market: "SmartCoins",
            user: "User Issued Assets",
            symbol: "Symbol",
            id: "ID",
            issuer: "Issuer",
            precision: "Precision"
        },
        asset: {
            title: "Asset",
            not_found: "The asset %(name)s does not exist",
            summary: {
                asset_type: "Asset type",
                issuer: "Issuer",
                current_supply: "Current supply",
                stealth_supply: "Stealth supply",
                market_fee: "Market fee",
                max_market_fee: "Max market fee"
            },
            price_feed: {
                title: "Price Feed",
                settlement_price: "Settlement price",
                maintenance_collateral_ratio: "Maintenance collateral ratio (MCR)",
                maximum_short_squeeze_ratio: "Maximum short squeeze ratio (MSSR)"
            },
            fee_pool: {
                title: "Fee Pool",
                core_exchange_rate: "Core exchange rate (CER)",
                pool_balance: "Pool balance",
                unclaimed_issuer_income: "Unclaimed issuer income",
                claim_fees: "Claim fees",
                fund_text: "The fee pool is used to pay fees in %(core)s by converting the fee in %(asset)s to %(core)s. If the fee pool runs out of funds, fees may no longer be paid in %(asset)s and will default to %(core)s",
                claim_text: "The asset issuer may claim any accumulated fees here."
            },
            permissions: {
                title: "Permissions",
                max_market_fee: "Max market fee",
                max_supply: "Max supply",
                blacklist_authorities: "Blacklist authorities",
                blacklist_markets: "Blacklist markets",
                whitelist_authorities: "Whitelist authorities",
                whitelist_markets: "Whitelist markets"
            },
            price_feed_data: {
                title: "Price Feed Data",
                settlement_price: "Settlement price",
                core_exchange_rate: "CER",
                maintenance_collateral_ratio: "MCR",
                maximum_short_squeeze_ratio: "MSSR",
                publisher: "Publisher",
                published: "Published"
            }
        },
        witnesses: {
            title: "Witnesses",
            current: "Current witness",
            participation: "Participation rate",
            pay: "Pay-per-block",
            budget: "Remaining budget",
            next_vote: "Next vote update",
            card: "Card view",
            table: "Table view",
            rank: "Rank",
            last_confirmed: "Last confirmed",
            missed: "Blocks missed"

        },
        committee_members: {
            title: "Committee members",
            active: "Total number of active committee members"
        },
        committee_member: {
            title: "Committee member"
        },
        workers: {
            title: "Budget Items"
        },
        proposals: {
            title: "Proposals"
        },
        account: {
            title: "Account"
        }
    },
    settings: {
        inverseMarket: "Market orientation preference",
        unit: "Preferred unit of account",
        confirmMarketOrder: "Ask for confirmation of market orders",
        locale: "Switch language",
        confirm_yes: "Always",
        confirm_no: "Never",
        always_confirm: "Always ask for confirmation",
        wallets: "Wallets",
        connection: "API Connection",
        add_ws: "Add new websocket API",
        remove_ws: "Remove websocket API",
        faucet_address: "Faucet Address",
        showSettles: "Show settle orders in depth chart",
        yes: "Yes",
        no: "No"
    },
    footer: {
        title: "BitShares 2.0",
        block: "Head block",
        loading: "Loading..."
    },
    exchange: {
        market: "Market",
        price_history: "Price Chart",
        order_depth: "Market Depth",
        history: "All History",
        my_history: "My History",
        balance: "Your balance",
        lowest_ask: "Lowest ask",
        highest_bid: "Highest bid",
        total: "Total",
        value: "Value",
        price: "Price",
        latest: "Latest",
        call: "Call Price",
        core_rate: "Fee Rate",
        settle: "Settlement",
        squeeze: "Margin Call Price",
        maintenance: "Maintenance Call Price",
        your_price: "Your Call Price",
        volume: "Volume",
        vol_short: "Vol",
        spread: "Spread",
        quantity: "Amount",
        buy: "Buy",
        sell: "Sell",
        receive: "Receive",
        vertical: "Vertical",
        horizontal: "Horizontal",
        confirm_buy: "Confirm order: Buy %(buy_amount)s %(buy_symbol)s at a price of %(price_amount)s %(price_symbol)s",
        confirm_sell: "Confirm order: Sell %(sell_amount)s %(sell_symbol)s at a price of %(price_amount)s %(price_symbol)s",
        market_name: "My Markets",
        quote_supply: "Quote supply",
        base_supply: "Base supply",
        more: "All markets",
        volume_24: "24hr Volume",
        change: "Change",
        confirm: "Your order is %(diff)s% away from the current price, are you sure?",
        indicators: "Indicators",
        rsi: "Relative Strength Index",
        ema: "Exponential Moving Average",
        sma: "Simple Moving Average",
        atr: "Average True Range",
        period: "Time period (days)",
        overbought: "Overbought",
        oversold: "Oversold",
        index: "Index",
        my_bids: "My bids",
        my_asks: "My asks",
        settle_orders: "Settle orders",
        asks: "Asks",
        bids: "Bids",
        no_data: "No data",
        time: "Time interval",
        borrow: "Borrow"
    },
    fees: {
     title: "Fee Schedule"
    },
    markets: {
        title: "Markets",
        base: "Base asset",
        market_search: "Market Search",
        filter: "Filter",
        core_rate: "Core rate",
        supply: "Supply",
        search: "Search",
        preferred: "My Favorite Markets"
    },
    wallet: {
        title: "Wallet",
        confirm: "Password (confirm)",
        password: "Password",
        existing_password: "Existing Password",
        change_password: "Change Password",
        change_wallet: "Change Wallet",
        wallet_created: "Wallet Created",
        create_wallet: "Create Wallet",
        import_bts1: "Import from BitShares 0.9.3c",
        setup_wallet: "Setup your wallet",
        delete_wallet: "Delete Wallet",
        delete_confirm_line1: "Are you ABSOLUTELY sure?",
        delete_confirm_line2: "Unexpected bad things will happen if you don’t read this!",
        delete_confirm_line3: "This action CANNOT be undone.",
        delete_wallet_name: "Delete Wallet (%(name)s)",
        balance_claims: "Balance Claims",
        download: "Download",
        name: "Wallet Name",
        create: "Create",
        console: "Wallet Management Console",
        create_backup: "Create Backup",
        backup_brainkey: "Backup Brainkey",
        create_backup_of: "Create Backup (%(name)s Wallet)",
        import_backup: "Import Backup",
        restore_backup: "Restore Backup",
        import_keys: "Import Keys",
        import_keys_tool: "Key Import Tool",
        brainkey: "Brainkey",
        new_wallet: "New Wallet",
        active_wallet: "Active Wallet",
        verified: "Verified",
        verify_prior_backup: "Verify Prior Backup",
        brainkey_not_verified: "This Brainkey is not verified",
        cancel: "Cancel",
        reset: "Reset",
        done: "Done",
        verify: "Verify",
        invalid_format: "Invalid Format",
        enter_password: "Enter Password",
        downoad: "Download",
        new_wallet_name: "New Wallet Name",
        wallet_exist: "Wallet exists, choose a new name",
        wallet_exist_with_name: "Wallet (%(name)s) exists, please change the name",
        accept: "Accept",
        ready_to_restore: "Ready to Restore",
        restore_wallet_of: "Restore (%(name)s Wallet)",
        restore_success: "Successfully restored (%(name)s) wallet",
        change: "Change (%(name)s Wallet)",
        import_20_notice1: "Import your BTS 2.0+ BACKUP first",
        import_20_notice2: "(if you have one)",
        loading_balances: "Loading balance claims",
        no_balance: "No balance claims",
        claim_balance: "Claim Balance",
        claim_balances: "Claim Balances",
        balance_claim_lookup: "Lookup balances",
        unclaimed: "Unclaimed",
        unclaimed_vesting: "Unclaimed (vesting)",
        no_accounts: "No Accounts",
        brainkey_no_match: "Brainkey does not match, keep going",
        reenter_brainkey: "Re-Enter Brainkey",
        pwd4brainkey: "Enter password to show your brainkey",
        show_brainkey: "Show Brainkey",
        brainkey_w1: "WARNING: Print this out, or write it down.",
        brainkey_w2: "Anyone with access to your recovery key will",
        brainkey_w3: "have access to funds within this wallet.",
        custom_brainkey: "Custom Brainkey (advanced)",
        last_backup: "Last backup",
        never_backed_up: "This Wallet has never been backed up",
        need_backup: "This Wallet needs a backup",
        noneed_backup: "No backup is needed"
    },
    borrow: {
        title: "%(asset_symbol)s Margin",
        no_valid: "No valid feeds for %(asset_symbol)s",
        coll_ratio: "Collateral ratio",
        call_limit: "Market Call Limit",
        adjust: "Update Position",
        close: "Close Position",
        update: "Update",
        errors: {
            below: "Collateral ratio is too low, this position will be margin called instantly",
            collateral: "Insufficient collateral balance"
        }
    },
    modal : {
      issue : {
        to: "Issue To",
        amount: "Amount to Issue",
        submit: "Issue Asset"
      },
      withdraw : {
        amount: "Amount to Withdraw",
        address: "Withdraw to Address",
        submit: "Withdraw"
      },
      settle: {
        title: "Request settlement of %(asset)s",
        amount: "Amount to settle",
        submit: "Settle asset"
      },
      ok: "OK"
    },
    init_error: {
        title: "Application initialization issues",
        ws_status: "Websocket Connection Status",
        retry: "Retry",
        connected: "Connected",
        not_connected: "Not connected",
        browser: "Unsupported browser",
        browser_text: "The Browser you are using has not been fully tested to support the Bitshares Wallet. We highly recommend that you backup your wallet and import it using the Chrome Browser until we have had more time to fully test your browser of choice. Use at your own risk.",
        understand: "I understand"
    },
    refcode: {
        claim: "Claim",
        claim_refcode: "Claim Referral Code",
        refcode_optional: "Referral Code (optional)",
        enter_refcode: "Enter referral code"
    },
    gateway: {
        bridge: "Bridge",
        gateway: "Gateway",
        symbol: "Symbol",
        deposit_to: "Deposit To",
        balance: "Balance",
        generate: "Generate",
        deposit: "Deposit",
        withdraw: "Withdraw",
        inventory: "Inventory",
        scan_qr: "Scan QR",
        transwiser: {
            gateway: "Transwiser",
            visit_weidian: "Visit to deposit",
            deposit_title: "Deposit RMB to %(asset)s",
            withdraw_title: "Withdraw %(asset)s to RMB",
            alipay: "ALIPAY Account Name",
            withdraw_note: "Currently only ALIPAY withdraw is supported.  Your asset will be converted at 1:1 ratio and send RMB to your ALIPAY account.",
            you_will_receive: "You will receive %(amount)s RMB"
        },
        meta: {
            open_website: "Open Website"
        }
    }
};
