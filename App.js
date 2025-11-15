import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';

const FlexboxDemo = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    { name: 'Flex Basics', component: FlexBasics },
    { name: 'Flex Direction', component: FlexDirectionBasics },
    { name: 'Direction', component: DirectionLayout },
    { name: 'Justify Content', component: JustifyContentBasics },
    { name: 'Align Items', component: AlignItemsLayout },
    { name: 'Align Self', component: AlignSelfLayout },
    { name: 'Align Content', component: AlignContentLayout },
    { name: 'Flex Wrap', component: FlexWrapLayout },
    { name: 'Flex Properties', component: FlexPropertiesLayout },
    { name: 'Row & Column Gap', component: RowGapAndColumnGap },
    { name: 'Width & Height', component: WidthHeightBasics },
    { name: 'Position', component: PositionLayout }
  ];

  const DemoComponent = demos[activeDemo].component;

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>React Native Flexbox Demo</Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
        <View style={styles.tabRow}>
          {demos.map((demo, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveDemo(index)}
              style={[styles.tab, activeDemo === index && styles.activeTab]}
            >
              <Text style={[styles.tabText, activeDemo === index && styles.activeTabText]}>
                {demo.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.demoContainer}>
        <DemoComponent />
      </View>
    </View>
  );
};

// 1. Flex Basics
const FlexBasics = () => (
  <View style={[styles.container, { flexDirection: 'column' }]}>
    <View style={{ flex: 1, backgroundColor: 'red' }} />
    <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
    <View style={{ flex: 3, backgroundColor: 'green' }} />
  </View>
);

// 2. Flex Direction
const FlexDirectionBasics = () => {
  const [flexDirection, setFlexDirection] = useState('column');
  
  return (
    <PreviewLayout
      label="flexDirection"
      values={['column', 'row', 'column-reverse', 'row-reverse']}
      selectedValue={flexDirection}
      setSelectedValue={setFlexDirection}>
      <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
      <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
      <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
    </PreviewLayout>
  );
};

// 3. Direction Layout
const DirectionLayout = () => {
  const [direction, setDirection] = useState('ltr');
  
  return (
    <PreviewLayout
      label="direction"
      values={['ltr', 'rtl']}
      selectedValue={direction}
      setSelectedValue={setDirection}>
      <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
      <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
      <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
    </PreviewLayout>
  );
};

// 4. Justify Content
const JustifyContentBasics = () => {
  const [justifyContent, setJustifyContent] = useState('flex-start');
  
  return (
    <PreviewLayout
      label="justifyContent"
      values={['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']}
      selectedValue={justifyContent}
      setSelectedValue={setJustifyContent}>
      <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
      <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
      <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
    </PreviewLayout>
  );
};

// 5. Align Items
const AlignItemsLayout = () => {
  const [alignItems, setAlignItems] = useState('stretch');
  
  return (
    <PreviewLayout
      label="alignItems"
      values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
      selectedValue={alignItems}
      setSelectedValue={setAlignItems}>
      <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
      <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
      <View style={[styles.box, { width: 'auto', minWidth: 50, backgroundColor: 'steelblue' }]} />
    </PreviewLayout>
  );
};

// 6. Align Self
const AlignSelfLayout = () => {
  const [alignSelf, setAlignSelf] = useState('stretch');
  
  return (
    <PreviewLayout
      label="alignSelf"
      values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
      selectedValue={alignSelf}
      setSelectedValue={setAlignSelf}>
      <View style={[styles.box, { alignSelf, width: 'auto', minWidth: 50, backgroundColor: 'powderblue' }]} />
      <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
      <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
    </PreviewLayout>
  );
};

// 7. Align Content
const AlignContentLayout = () => {
  const [alignContent, setAlignContent] = useState('flex-start');
  
  return (
    <PreviewLayout
      label="alignContent"
      values={['flex-start', 'flex-end', 'stretch', 'center', 'space-between', 'space-around']}
      selectedValue={alignContent}
      setSelectedValue={setAlignContent}
      containerStyle={{ flexWrap: 'wrap', maxHeight: 400 }}>
      <View style={[styles.tallBox, { backgroundColor: 'orangered' }]} />
      <View style={[styles.tallBox, { backgroundColor: 'orange' }]} />
      <View style={[styles.tallBox, { backgroundColor: 'mediumseagreen' }]} />
      <View style={[styles.tallBox, { backgroundColor: 'deepskyblue' }]} />
      <View style={[styles.tallBox, { backgroundColor: 'mediumturquoise' }]} />
      <View style={[styles.tallBox, { backgroundColor: 'mediumslateblue' }]} />
      <View style={[styles.tallBox, { backgroundColor: 'purple' }]} />
    </PreviewLayout>
  );
};

// 8. Flex Wrap
const FlexWrapLayout = () => {
  const [flexWrap, setFlexWrap] = useState('wrap');
  
  return (
    <PreviewLayout
      label="flexWrap"
      values={['wrap', 'nowrap']}
      selectedValue={flexWrap}
      setSelectedValue={setFlexWrap}
      containerStyle={{ maxHeight: 400 }}>
      <View style={[styles.tallBox, { backgroundColor: 'orangered' }]} />
      <View style={[styles.tallBox, { backgroundColor: 'orange' }]} />
      <View style={[styles.tallBox, { backgroundColor: 'mediumseagreen' }]} />
      <View style={[styles.tallBox, { backgroundColor: 'deepskyblue' }]} />
      <View style={[styles.tallBox, { backgroundColor: 'mediumturquoise' }]} />
      <View style={[styles.tallBox, { backgroundColor: 'mediumslateblue' }]} />
      <View style={[styles.tallBox, { backgroundColor: 'purple' }]} />
    </PreviewLayout>
  );
};

// 9. Flex Properties
const FlexPropertiesLayout = () => {
  const [powderblue, setPowderblue] = useState({ flexGrow: 0, flexShrink: 1, flexBasis: 'auto' });
  const [skyblue, setSkyblue] = useState({ flexGrow: 1, flexShrink: 0, flexBasis: 100 });
  const [steelblue, setSteelblue] = useState({ flexGrow: 0, flexShrink: 1, flexBasis: 200 });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexPropsRow}>
        <BoxInfo color="powderblue" {...powderblue} setStyle={setPowderblue} />
        <BoxInfo color="skyblue" {...skyblue} setStyle={setSkyblue} />
        <BoxInfo color="steelblue" {...steelblue} setStyle={setSteelblue} />
      </View>
      <View style={styles.previewContainer}>
        <View style={[{ flexBasis: powderblue.flexBasis, flexGrow: powderblue.flexGrow, flexShrink: powderblue.flexShrink, backgroundColor: 'powderblue', height: 50 }]} />
        <View style={[{ flexBasis: skyblue.flexBasis, flexGrow: skyblue.flexGrow, flexShrink: skyblue.flexShrink, backgroundColor: 'skyblue', height: 50 }]} />
        <View style={[{ flexBasis: steelblue.flexBasis, flexGrow: steelblue.flexGrow, flexShrink: steelblue.flexShrink, backgroundColor: 'steelblue', height: 50 }]} />
      </View>
    </ScrollView>
  );
};

const BoxInfo = ({ color, flexBasis, flexShrink, flexGrow, setStyle }) => (
  <View style={styles.boxInfoContainer}>
    <View style={[styles.boxLabel, { backgroundColor: color }]}>
      <Text style={styles.boxLabelText}>Box</Text>
    </View>
    <Text style={styles.inputLabel}>flexBasis</Text>
    <TextInput
      value={String(flexBasis)}
      style={styles.input}
      onChangeText={fB => setStyle(v => ({ ...v, flexBasis: isNaN(parseInt(fB)) ? 'auto' : parseInt(fB) }))}
    />
    <Text style={styles.inputLabel}>flexShrink</Text>
    <TextInput
      value={String(flexShrink)}
      style={styles.input}
      onChangeText={fS => setStyle(v => ({ ...v, flexShrink: isNaN(parseInt(fS)) ? undefined : parseInt(fS) }))}
    />
    <Text style={styles.inputLabel}>flexGrow</Text>
    <TextInput
      value={String(flexGrow)}
      style={styles.input}
      onChangeText={fG => setStyle(v => ({ ...v, flexGrow: isNaN(parseInt(fG)) ? undefined : parseInt(fG) }))}
    />
  </View>
);

// 10. Row and Column Gap
const RowGapAndColumnGap = () => {
  const [rowGap, setRowGap] = useState(10);
  const [columnGap, setColumnGap] = useState(10);

  return (
    <View style={styles.container}>
      <View style={styles.gapInputsRow}>
        <View style={styles.itemsCenter}>
          <Text>Row Gap</Text>
          <TextInput
            style={styles.input}
            value={String(rowGap)}
            keyboardType="numeric"
            onChangeText={v => setRowGap(Number(v))}
          />
        </View>
        <View style={styles.itemsCenter}>
          <Text>Column Gap</Text>
          <TextInput
            style={styles.input}
            value={String(columnGap)}
            keyboardType="numeric"
            onChangeText={v => setColumnGap(Number(v))}
          />
        </View>
      </View>
      <View style={[styles.gapContainer, { rowGap, columnGap }]}>
        <View style={[styles.tallBox, { backgroundColor: 'orangered' }]} />
        <View style={[styles.tallBox, { backgroundColor: 'orange' }]} />
        <View style={[styles.tallBox, { backgroundColor: 'mediumseagreen' }]} />
        <View style={[styles.tallBox, { backgroundColor: 'deepskyblue' }]} />
        <View style={[styles.tallBox, { backgroundColor: 'mediumturquoise' }]} />
      </View>
    </View>
  );
};

// 11. Width and Height
const WidthHeightBasics = () => {
  const [widthType, setWidthType] = useState('auto');
  const [heightType, setHeightType] = useState('auto');

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>width </Text>
        {['auto', 300, '80%'].map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setWidthType(value)}
            style={[styles.button, widthType === value && styles.selected]}
          >
            <Text style={[styles.buttonLabel, widthType === value && styles.selectedLabel]}>
              {String(value)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>height </Text>
        {['auto', 200, '60%'].map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setHeightType(value)}
            style={[styles.button, heightType === value && styles.selected]}
          >
            <Text style={[styles.buttonLabel, heightType === value && styles.selectedLabel]}>
              {String(value)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ alignSelf: 'flex-start', backgroundColor: 'aliceblue', height: heightType, width: widthType, padding: 15 }}>
        <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
        <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
        <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
      </View>
    </View>
  );
};

// 12. Position
const PositionLayout = () => {
  const [position, setPosition] = useState('relative');
  
  return (
    <PreviewLayout
      label="position"
      values={['relative', 'absolute']}
      selectedValue={position}
      setSelectedValue={setPosition}
      containerStyle={{ minHeight: 200 }}>
      <View style={[styles.box, { top: 25, left: 25, position, backgroundColor: 'powderblue' }]} />
      <View style={[styles.box, { top: 50, left: 50, position, backgroundColor: 'skyblue' }]} />
      <View style={[styles.box, { top: 75, left: 75, position, backgroundColor: 'steelblue' }]} />
    </PreviewLayout>
  );
};

// Shared PreviewLayout Component
const PreviewLayout = ({ label, children, values, selectedValue, setSelectedValue, containerStyle = {} }) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text style={[styles.buttonLabel, selectedValue === value && styles.selectedLabel]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.layoutContainer, { [label]: selectedValue }, containerStyle]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#1f2937',
  },
  tabContainer: {
    marginBottom: 15,
    maxHeight: 50,
  },
  tabRow: {
    flexDirection: 'row',
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ff7f50',
  },
  activeTab: {
    backgroundColor: '#ff7f50',
  },
  tabText: {
    color: '#ff7f50',
    fontWeight: '500',
    fontSize: 12,
  },
  activeTabText: {
    color: 'white',
  },
  demoContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  box: {
    width: 50,
    height: 50,
  },
  tallBox: {
    width: 50,
    height: 80,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '30%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
    textAlign: 'center',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
  },
  layoutContainer: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  flexPropsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  boxInfoContainer: {
    alignItems: 'center',
  },
  boxLabel: {
    minWidth: 80,
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  boxLabelText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 14,
    marginTop: 6,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 3,
    width: 50,
    textAlign: 'center',
    marginBottom: 5,
  },
  previewContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'aliceblue',
    minHeight: 50,
  },
  gapInputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  itemsCenter: {
    alignItems: 'center',
  },
  gapContainer: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'aliceblue',
    maxHeight: 400,
    alignContent: 'flex-start',
  },
});

export default FlexboxDemo;