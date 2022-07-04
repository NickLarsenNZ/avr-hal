(function() {var implementors = {};
implementors["atmega_hal"] = [{"text":"impl PartialEq&lt;ReferenceVoltage&gt; for ReferenceVoltage","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;AdcSettings&gt; for AdcSettings","synthetic":false,"types":[]}];
implementors["attiny_hal"] = [{"text":"impl PartialEq&lt;ReferenceVoltage&gt; for ReferenceVoltage","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;AdcSettings&gt; for AdcSettings","synthetic":false,"types":[]}];
implementors["avr_device"] = [{"text":"impl&lt;REG:&nbsp;RegisterSpec, FI&gt; PartialEq&lt;FI&gt; for R&lt;REG&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;REG::Ux: PartialEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;FI: Copy + Into&lt;REG::Ux&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;U, T, FI&gt; PartialEq&lt;FI&gt; for FieldReader&lt;U, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: PartialEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;FI: Copy + Into&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;Interrupt&gt; for Interrupt","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;ACIS_A&gt; for ACIS_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;ADPS_A&gt; for ADPS_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;ADTS_A&gt; for ADTS_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;MUX_A&gt; for MUX_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;REFS_A&gt; for REFS_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;CLKPS_A&gt; for CLKPS_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;SM_A&gt; for SM_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;EEPM_A&gt; for EEPM_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;ISC0_A&gt; for ISC0_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;BODLEVEL_A&gt; for BODLEVEL_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;SUT_CKSEL_A&gt; for SUT_CKSEL_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;LB_A&gt; for LB_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;WGM0_A&gt; for WGM0_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;COM0B_A&gt; for COM0B_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;CS0_A&gt; for CS0_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;DTPS_A&gt; for DTPS_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;COM1B_A&gt; for COM1B_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;CS1_A&gt; for CS1_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;COM1A_A&gt; for COM1A_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;USICS_A&gt; for USICS_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;USIWM_A&gt; for USIWM_A","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;WDPL_A&gt; for WDPL_A","synthetic":false,"types":[]}];
implementors["avr_hal_generic"] = [{"text":"impl PartialEq&lt;ClockDivider&gt; for ClockDivider","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;Direction&gt; for Direction","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;Prescaler&gt; for Prescaler","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;SerialClockRate&gt; for SerialClockRate","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;DataOrder&gt; for DataOrder","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;Settings&gt; for Settings","synthetic":false,"types":[]},{"text":"impl&lt;CLOCK:&nbsp;Clock&gt; PartialEq&lt;Baudrate&lt;CLOCK&gt;&gt; for Baudrate&lt;CLOCK&gt;","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;Timeout&gt; for Timeout","synthetic":false,"types":[]}];
implementors["embedded_hal"] = [{"text":"impl&lt;'a&gt; PartialEq&lt;Operation&lt;'a&gt;&gt; for Operation&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, W:&nbsp;PartialEq + 'static&gt; PartialEq&lt;Operation&lt;'a, W&gt;&gt; for Operation&lt;'a, W&gt;","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;StandardId&gt; for StandardId","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;ExtendedId&gt; for ExtendedId","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;Id&gt; for Id","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;ErrorKind&gt; for ErrorKind","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;PinState&gt; for PinState","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;Polarity&gt; for Polarity","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;Phase&gt; for Phase","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;Mode&gt; for Mode","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;Direction&gt; for Direction","synthetic":false,"types":[]}];
implementors["nb"] = [{"text":"impl&lt;E:&nbsp;PartialEq&gt; PartialEq&lt;Error&lt;E&gt;&gt; for Error&lt;E&gt;","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl PartialEq&lt;Delimiter&gt; for Delimiter","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;Spacing&gt; for Spacing","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;Ident&gt; for Ident","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; PartialEq&lt;T&gt; for Ident <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsRef&lt;str&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl PartialEq&lt;Member&gt; for Member","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;Index&gt; for Index","synthetic":false,"types":[]},{"text":"impl PartialEq&lt;Lifetime&gt; for Lifetime","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialEq&lt;Cursor&lt;'a&gt;&gt; for Cursor&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["void"] = [{"text":"impl&lt;T&gt; PartialEq&lt;T&gt; for Void","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()