NDSummary.OnToolTipsLoaded("CClass:NodeDiscovery",{5150:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5150\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeDiscovery</div></div></div><div class=\"TTSummary\">Represents 1 node discovery, which is created when a Wireless Node Discovery packet is sent from a Node.&nbsp; Note: There are multiple versions of Node Discovery packets which have been developed over time.&nbsp; Each version has added more useful information. If an earlier version of the Node Discovery packet is heard, this NodeDiscovery object will have some information be invalid (set to default values).</div></div>",5152:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5152\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> NodeDiscovery(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a NodeDiscovery object from a WirelessPacket</div></div>",5154:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5154\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address of the node that sent the Node Discovery packet.</div></div>",5155:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5155\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency m_radioChannel</div><div class=\"TTSummary\">The radio channel (WirelessTypes::Frequency) that the node was on that sent the Node Discovery packet.</div></div>",5156:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5156\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_panId</div><div class=\"TTSummary\">The PAN id of the Node that send the Node Discovery packet.</div></div>",5157:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5157\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel m_model</div><div class=\"TTSummary\">The model of the node that sent the Node Discovery packet.</div></div>",5158:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5158\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_serialNumber</div><div class=\"TTSummary\">The serial number of the node that sent the Node Discovery packet.</div></div>",5159:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5159\" class=\"NDPrototype NoParameterForm\">Version m_firmwareVersion</div><div class=\"TTSummary\">The firmware version of the node that sent the Node Discovery packet.</div></div>",5160:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5160\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DefaultMode m_defaultMode</div><div class=\"TTSummary\">The WirelessTypes::DefaultMode of the node that sent the Node Discovery packet.</div></div>",5161:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5161\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol m_commProtocol</div><div class=\"TTSummary\">The WirelessTypes::CommProtocol of the node that sent the Node Discovery packet.</div></div>",5162:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5162\" class=\"NDPrototype NoParameterForm\">Version m_asppVersionLxrs</div><div class=\"TTSummary\">The ASPP Version of the node when in LXRS mode.</div></div>",5163:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5163\" class=\"NDPrototype NoParameterForm\">Version m_asppVersionLxrsPlus</div><div class=\"TTSummary\">The ASPP Version of the node when in LXRS+ mode.</div></div>",5164:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5164\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_bitResult</div><div class=\"TTSummary\">The Built In Test result that was sent in the packet.</div></div>",5165:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5165\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRssi</div><div class=\"TTSummary\">The Base Station RSSI that identifies the received signal strength at the Base Station.</div></div>",5166:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5166\" class=\"NDPrototype NoParameterForm\">Timestamp m_timestamp</div><div class=\"TTSummary\">The Timestamp of when the NodeDiscovery packet was received by MSCL.</div></div>",5168:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5168\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v1(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 1 Node Discovery packet.</div></div>",5169:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5169\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v2(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 2 Node Discovery packet.</div></div>",5170:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5170\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v3(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 3 Node Discovery packet.</div></div>",5171:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5171\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v4(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 4 Node Discovery packet.</div></div>",5172:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5172\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v5(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 5 Node Discovery packet.</div></div>",5173:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5173\" class=\"NDPrototype NoParameterForm\">NodeAddress nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address of the discovered Node.</div></div>",5174:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5174\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency of the discovered Node.</div></div>",5175:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5175\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> panId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the PAN Id of the discovered Node.&nbsp; Note: Returns 0 if not present in the packet.</div></div>",5176:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5176\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model of the discovered Node.</div></div>",5177:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5177\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> serialNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the discovered Node.&nbsp; Note: Returns 0 if not present in the packet.</div></div>",5178:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5178\" class=\"NDPrototype NoParameterForm\">Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware version of the discovered Node.&nbsp; Note: Returns 0.0.0 if not present in the packet.</div></div>",5179:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5179\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DefaultMode defaultMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DefaultMode of the discovered Node.&nbsp; Note: Returns 999 if not present in the packet.</div></div>",5180:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5180\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> builtInTestResult() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the result bitmask of the built in test.</div></div>",5181:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5181\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol communicationProtocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::CommProtocol of the discovered Node.</div></div>",5182:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5182\" class=\"NDPrototype NoParameterForm\">Version asppVersion_lxrs() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ASPP protocol Version of the Node when it is in LXRS RadioMode.</div></div>",5183:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5183\" class=\"NDPrototype NoParameterForm\">Version asppVersion_lxrsPlus() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ASPP protocol Version of the Node when it is in LXRS+ RadioMode.</div></div>",5184:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5184\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the base station rssi of the discovered Node.</div></div>",5185:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5185\" class=\"NDPrototype NoParameterForm\">Timestamp timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp of when the NodeDiscovery packet was received by MSCL.</div></div>",5187:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a vector of NodeDiscovery objects</div></div>"});