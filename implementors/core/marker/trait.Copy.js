(function() {var implementors = {};
implementors["atmega_hal"] = [{"text":"impl Copy for ReferenceVoltage","synthetic":false,"types":[]},{"text":"impl Copy for AdcSettings","synthetic":false,"types":[]}];
implementors["attiny_hal"] = [{"text":"impl Copy for ReferenceVoltage","synthetic":false,"types":[]},{"text":"impl Copy for AdcSettings","synthetic":false,"types":[]}];
implementors["avr_device"] = [{"text":"impl Copy for Interrupt","synthetic":false,"types":[]},{"text":"impl Copy for ACIS_A","synthetic":false,"types":[]},{"text":"impl Copy for ADPS_A","synthetic":false,"types":[]},{"text":"impl Copy for ADTS_A","synthetic":false,"types":[]},{"text":"impl Copy for MUX_A","synthetic":false,"types":[]},{"text":"impl Copy for REFS_A","synthetic":false,"types":[]},{"text":"impl Copy for CLKPS_A","synthetic":false,"types":[]},{"text":"impl Copy for SM_A","synthetic":false,"types":[]},{"text":"impl Copy for EEPM_A","synthetic":false,"types":[]},{"text":"impl Copy for ISC0_A","synthetic":false,"types":[]},{"text":"impl Copy for BODLEVEL_A","synthetic":false,"types":[]},{"text":"impl Copy for SUT_CKSEL_A","synthetic":false,"types":[]},{"text":"impl Copy for LB_A","synthetic":false,"types":[]},{"text":"impl Copy for WGM0_A","synthetic":false,"types":[]},{"text":"impl Copy for COM0B_A","synthetic":false,"types":[]},{"text":"impl Copy for CS0_A","synthetic":false,"types":[]},{"text":"impl Copy for DTPS_A","synthetic":false,"types":[]},{"text":"impl Copy for COM1B_A","synthetic":false,"types":[]},{"text":"impl Copy for CS1_A","synthetic":false,"types":[]},{"text":"impl Copy for COM1A_A","synthetic":false,"types":[]},{"text":"impl Copy for USICS_A","synthetic":false,"types":[]},{"text":"impl Copy for USIWM_A","synthetic":false,"types":[]},{"text":"impl Copy for WDPL_A","synthetic":false,"types":[]}];
implementors["avr_hal_generic"] = [{"text":"impl Copy for ClockDivider","synthetic":false,"types":[]},{"text":"impl&lt;SPEED:&nbsp;Copy&gt; Copy for Delay&lt;SPEED&gt;","synthetic":false,"types":[]},{"text":"impl Copy for Error","synthetic":false,"types":[]},{"text":"impl Copy for Direction","synthetic":false,"types":[]},{"text":"impl Copy for Prescaler","synthetic":false,"types":[]},{"text":"impl Copy for SerialClockRate","synthetic":false,"types":[]},{"text":"impl Copy for DataOrder","synthetic":false,"types":[]},{"text":"impl&lt;CLOCK:&nbsp;Copy&gt; Copy for Baudrate&lt;CLOCK&gt;","synthetic":false,"types":[]},{"text":"impl Copy for Timeout","synthetic":false,"types":[]}];
implementors["embedded_hal"] = [{"text":"impl Copy for StandardId","synthetic":false,"types":[]},{"text":"impl Copy for ExtendedId","synthetic":false,"types":[]},{"text":"impl Copy for Id","synthetic":false,"types":[]},{"text":"impl Copy for ErrorKind","synthetic":false,"types":[]},{"text":"impl Copy for PinState","synthetic":false,"types":[]},{"text":"impl Copy for Polarity","synthetic":false,"types":[]},{"text":"impl Copy for Phase","synthetic":false,"types":[]},{"text":"impl Copy for Mode","synthetic":false,"types":[]},{"text":"impl Copy for Direction","synthetic":false,"types":[]}];
implementors["nb"] = [{"text":"impl&lt;E:&nbsp;Copy&gt; Copy for Error&lt;E&gt;","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Copy for Span","synthetic":false,"types":[]},{"text":"impl Copy for Delimiter","synthetic":false,"types":[]},{"text":"impl Copy for Spacing","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Copy for Underscore","synthetic":false,"types":[]},{"text":"impl Copy for Abstract","synthetic":false,"types":[]},{"text":"impl Copy for As","synthetic":false,"types":[]},{"text":"impl Copy for Async","synthetic":false,"types":[]},{"text":"impl Copy for Auto","synthetic":false,"types":[]},{"text":"impl Copy for Await","synthetic":false,"types":[]},{"text":"impl Copy for Become","synthetic":false,"types":[]},{"text":"impl Copy for Box","synthetic":false,"types":[]},{"text":"impl Copy for Break","synthetic":false,"types":[]},{"text":"impl Copy for Const","synthetic":false,"types":[]},{"text":"impl Copy for Continue","synthetic":false,"types":[]},{"text":"impl Copy for Crate","synthetic":false,"types":[]},{"text":"impl Copy for Default","synthetic":false,"types":[]},{"text":"impl Copy for Do","synthetic":false,"types":[]},{"text":"impl Copy for Dyn","synthetic":false,"types":[]},{"text":"impl Copy for Else","synthetic":false,"types":[]},{"text":"impl Copy for Enum","synthetic":false,"types":[]},{"text":"impl Copy for Extern","synthetic":false,"types":[]},{"text":"impl Copy for Final","synthetic":false,"types":[]},{"text":"impl Copy for Fn","synthetic":false,"types":[]},{"text":"impl Copy for For","synthetic":false,"types":[]},{"text":"impl Copy for If","synthetic":false,"types":[]},{"text":"impl Copy for Impl","synthetic":false,"types":[]},{"text":"impl Copy for In","synthetic":false,"types":[]},{"text":"impl Copy for Let","synthetic":false,"types":[]},{"text":"impl Copy for Loop","synthetic":false,"types":[]},{"text":"impl Copy for Macro","synthetic":false,"types":[]},{"text":"impl Copy for Match","synthetic":false,"types":[]},{"text":"impl Copy for Mod","synthetic":false,"types":[]},{"text":"impl Copy for Move","synthetic":false,"types":[]},{"text":"impl Copy for Mut","synthetic":false,"types":[]},{"text":"impl Copy for Override","synthetic":false,"types":[]},{"text":"impl Copy for Priv","synthetic":false,"types":[]},{"text":"impl Copy for Pub","synthetic":false,"types":[]},{"text":"impl Copy for Ref","synthetic":false,"types":[]},{"text":"impl Copy for Return","synthetic":false,"types":[]},{"text":"impl Copy for SelfType","synthetic":false,"types":[]},{"text":"impl Copy for SelfValue","synthetic":false,"types":[]},{"text":"impl Copy for Static","synthetic":false,"types":[]},{"text":"impl Copy for Struct","synthetic":false,"types":[]},{"text":"impl Copy for Super","synthetic":false,"types":[]},{"text":"impl Copy for Trait","synthetic":false,"types":[]},{"text":"impl Copy for Try","synthetic":false,"types":[]},{"text":"impl Copy for Type","synthetic":false,"types":[]},{"text":"impl Copy for Typeof","synthetic":false,"types":[]},{"text":"impl Copy for Union","synthetic":false,"types":[]},{"text":"impl Copy for Unsafe","synthetic":false,"types":[]},{"text":"impl Copy for Unsized","synthetic":false,"types":[]},{"text":"impl Copy for Use","synthetic":false,"types":[]},{"text":"impl Copy for Virtual","synthetic":false,"types":[]},{"text":"impl Copy for Where","synthetic":false,"types":[]},{"text":"impl Copy for While","synthetic":false,"types":[]},{"text":"impl Copy for Yield","synthetic":false,"types":[]},{"text":"impl Copy for Add","synthetic":false,"types":[]},{"text":"impl Copy for AddEq","synthetic":false,"types":[]},{"text":"impl Copy for And","synthetic":false,"types":[]},{"text":"impl Copy for AndAnd","synthetic":false,"types":[]},{"text":"impl Copy for AndEq","synthetic":false,"types":[]},{"text":"impl Copy for At","synthetic":false,"types":[]},{"text":"impl Copy for Bang","synthetic":false,"types":[]},{"text":"impl Copy for Caret","synthetic":false,"types":[]},{"text":"impl Copy for CaretEq","synthetic":false,"types":[]},{"text":"impl Copy for Colon","synthetic":false,"types":[]},{"text":"impl Copy for Colon2","synthetic":false,"types":[]},{"text":"impl Copy for Comma","synthetic":false,"types":[]},{"text":"impl Copy for Div","synthetic":false,"types":[]},{"text":"impl Copy for DivEq","synthetic":false,"types":[]},{"text":"impl Copy for Dollar","synthetic":false,"types":[]},{"text":"impl Copy for Dot","synthetic":false,"types":[]},{"text":"impl Copy for Dot2","synthetic":false,"types":[]},{"text":"impl Copy for Dot3","synthetic":false,"types":[]},{"text":"impl Copy for DotDotEq","synthetic":false,"types":[]},{"text":"impl Copy for Eq","synthetic":false,"types":[]},{"text":"impl Copy for EqEq","synthetic":false,"types":[]},{"text":"impl Copy for Ge","synthetic":false,"types":[]},{"text":"impl Copy for Gt","synthetic":false,"types":[]},{"text":"impl Copy for Le","synthetic":false,"types":[]},{"text":"impl Copy for Lt","synthetic":false,"types":[]},{"text":"impl Copy for MulEq","synthetic":false,"types":[]},{"text":"impl Copy for Ne","synthetic":false,"types":[]},{"text":"impl Copy for Or","synthetic":false,"types":[]},{"text":"impl Copy for OrEq","synthetic":false,"types":[]},{"text":"impl Copy for OrOr","synthetic":false,"types":[]},{"text":"impl Copy for Pound","synthetic":false,"types":[]},{"text":"impl Copy for Question","synthetic":false,"types":[]},{"text":"impl Copy for RArrow","synthetic":false,"types":[]},{"text":"impl Copy for LArrow","synthetic":false,"types":[]},{"text":"impl Copy for Rem","synthetic":false,"types":[]},{"text":"impl Copy for RemEq","synthetic":false,"types":[]},{"text":"impl Copy for FatArrow","synthetic":false,"types":[]},{"text":"impl Copy for Semi","synthetic":false,"types":[]},{"text":"impl Copy for Shl","synthetic":false,"types":[]},{"text":"impl Copy for ShlEq","synthetic":false,"types":[]},{"text":"impl Copy for Shr","synthetic":false,"types":[]},{"text":"impl Copy for ShrEq","synthetic":false,"types":[]},{"text":"impl Copy for Star","synthetic":false,"types":[]},{"text":"impl Copy for Sub","synthetic":false,"types":[]},{"text":"impl Copy for SubEq","synthetic":false,"types":[]},{"text":"impl Copy for Tilde","synthetic":false,"types":[]},{"text":"impl Copy for Brace","synthetic":false,"types":[]},{"text":"impl Copy for Bracket","synthetic":false,"types":[]},{"text":"impl Copy for Paren","synthetic":false,"types":[]},{"text":"impl Copy for Group","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Copy for Cursor&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Copy for AttrStyle","synthetic":false,"types":[]},{"text":"impl Copy for BinOp","synthetic":false,"types":[]},{"text":"impl Copy for RangeLimits","synthetic":false,"types":[]},{"text":"impl Copy for TraitBoundModifier","synthetic":false,"types":[]},{"text":"impl Copy for UnOp","synthetic":false,"types":[]},{"text":"impl&lt;'c, 'a&gt; Copy for StepCursor&lt;'c, 'a&gt;","synthetic":false,"types":[]}];
implementors["void"] = [{"text":"impl Copy for Void","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()