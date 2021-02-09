import {
  InputFromTo,
  InputCheckbox,
  InputCheckboxImage,
  InputCheckboxImageSearch,
} from "@molecules";
import { Loading } from "@atoms";
import { useRouter } from "next/router";
import { getLoader } from "@redux/selectors/loader";
import { useDispatch, useSelector } from "react-redux";
import { addFiltersDataCache } from "@redux/actions/filtersData";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Container, OtherFilters, ShowOtherFilters } from "./styles";
import { serialezeFiltersDataKey } from "@redux/reducers/filtersData";
import { getFiltersDataCacheByKey } from "@redux/selectors/filtersData";

import getConfig from "next/config";

const {
  publicRuntimeConfig: { uploadsUrl },
} = getConfig();

const FILTERS_ID = {
  main: {
    inverter: 8,
    servicedArea: 3,
    classEnergy: 11,
    brandCountry: 15,
    ventilationMode: 6,
    coolingHeating: 10,
    manufacturerCountry: 14,
    numberOfPluginUnits: 63,
  },
  other: {
    dehumidificationMode: 7,
    ionizer: 18,
    additionalModes: 19,
    remoteControl: 20,
    onOffTimer: 21,
    wiFi: 22,
    phase: 26,
    powerSupply: 27,
    fineAirFilters: 28,
    deodorizingFilter: 30,
    adjustableAirFlowDirection: 31,
    antiIceSystem: 32,
    memoryFunction: 33,
    antibacterialFilter: 36,
    vitaminCFilter: 37,
    plasmaFilter: 38,
    ionDeodorizationFilter: 39,
    catechinFilter: 40,
    fanSpeedControl: 41,
    warmStart: 42,
    motionSensor: 43,
    pipeDiameterGas: 46,
    jidkost: 45,
  },
  compressor: 44, //images
  group: {
    forHeatingUp: 12,
    forCoolingDown: 13,
  },
};

const Filter = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [showOther, toggleShowOther] = useState(false);
  const serializedKey = serialezeFiltersDataKey(router.query.c);
  const filtersData = useSelector(getFiltersDataCacheByKey(serializedKey));

  useEffect(() => {
    setLoading(true);
    (async () => {
      if (!filtersData) {
        const { categoryId, payload } = await fetchFiltersData(router.query.c);
        const {
          textFilters,
          manufacturerCountries,
          characteristicAttributes,
        } = payload;
        
        const serializedFiltersData = serializeFiltersData(
          characteristicAttributes
        );

        const serializedManufacturerCountries = serializeManufacturerCountries(
          manufacturerCountries
        );

        dispatch(
          addFiltersDataCache(categoryId, {
            textFilters,
            data: serializedFiltersData, // other filters
            manufacturerCountries: serializedManufacturerCountries,
          })
        );
      }
      setLoading(false);
    })();
  }, [router.query.c /* category */]);

  /**
   * fetch filters data by category id
   */
  const fetchFiltersData = useCallback(async categoryId => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/getFilterData/${categoryId}`,
      {
        headers: {
          projectId: "59",
        },
      }
    );

    const filtersData = {
      categoryId,
      payload: {},
    };
    filtersData.payload = await response.json();

    return filtersData;
  }, []);

  /**
   * serialize Filters Data, split by parts
   */
  const serializeFiltersData = useCallback(data => {
    const serializedData = {};
    for (let i = 0; i < data.length; i++) {
      const {
        title,
        id: sortId,
        name: type,
        name_ru: label,
        characteristic_id: id,
      } = data[i];
      if (!id) continue;
      if (!serializedData[id]) {
        serializedData[id] = { id, title, type, values: [] };
      }
      serializedData[id].values.push({ label, value: sortId });
    }
    return serializedData;
  }, []);

  /**
   * serialize Manufacturer Countries
   */
  const serializeManufacturerCountries = useCallback(manufacturerCountries => {
    const serializedData = manufacturerCountries.map(
      ({ logo, count, brand, id }) => ({
        count,
        value: id,
        label: brand,
        image: `${uploadsUrl}manufacturer_logo/size150/${logo}`,
      })
    );
    return serializedData;
  }, []);

  // filter`s parts
  const { data, manufacturerCountries, textFilters } = filtersData || {};
  const inverter = data?.[FILTERS_ID.main.inverter];
  const classEnergy = data?.[FILTERS_ID.main.classEnergy];
  const servicedArea = data?.[FILTERS_ID.main.servicedArea];
  const brandCountry = data?.[FILTERS_ID.main.brandCountry];
  const coolingHeating = data?.[FILTERS_ID.main.coolingHeating];
  const ventilationMode = data?.[FILTERS_ID.main.ventilationMode];
  const manufacturerCountry = data?.[FILTERS_ID.main.manufacturerCountry];
  const numberOfPluginUnits = data?.[FILTERS_ID.main.numberOfPluginUnits];

  return (
    <>
      <Container>
        <div className="column column-one">
          <InputFromTo title="Цена" inputName="price" />
          {numberOfPluginUnits && (
            <InputCheckbox data={numberOfPluginUnits} loading={loading} />
          )}
          <InputCheckboxImageSearch
            loading={loading}
            title="Производитель"
            inputName="manufacturerCountries"
            checkboxes={manufacturerCountries}
          />
        </div>
        <div className="column column-two">
          <InputCheckbox data={servicedArea} loading={loading} />
          <InputCheckbox data={inverter} loading={loading} />
          {/* 
            НА ОБОГРЕВ ДО -30 °С 
            НА ОХЛАЖДЕНИЯ ДО -40 °С  
          */}
          {data && (
            <div>
              {Object.values(FILTERS_ID.group)
                .filter(id => data[id])
                .map(id => (
                  <InputCheckbox
                    key={id}
                    data={{
                      id: data[id].id,
                      values: [
                        { ...data[id].values[0], label: data[id].title },
                      ],
                    }}
                  />
                ))}
            </div>
          )}
          <InputCheckbox data={ventilationMode} loading={loading} />
        </div>
        <div className="column column-three">
          <InputCheckbox data={classEnergy} loading={loading} />
          {textFilters &&
            Object.values(textFilters).reduce((acc, filter) => {
              const { filters, type, title, id } = filter;
              if (type === "group") {
                return [
                  ...acc,
                  ...filters.map(({ title, id }) => (
                    <InputFromTo
                      key={id}
                      title={title}
                      loading={loading}
                      inputName={`range${id}`}
                    />
                  )),
                ];
              }

              return [
                ...acc,
                <InputFromTo
                  key={id}
                  title={title}
                  loading={loading}
                  inputName={`range${id}`}
                />,
              ];
            }, [])}
        </div>
        <div className="column column-four">
          <InputCheckboxImage data={manufacturerCountry} loading={loading} />
          <InputCheckboxImage data={brandCountry} loading={loading} />
        </div>
      </Container>

      {showOther && data && (
        <OtherFilters>
          {Object.values(FILTERS_ID.other)
            // leave only the necessary ones
            .filter(id => data[id])
            .map(id => (
              <InputCheckbox key={id} data={data[id]} loading={loading} />
            ))}
        </OtherFilters>
      )}

      <ShowOtherFilters
        type="button"
        className="show-other-filters"
        aria-label={showOther ? "свернуть" : "показать ещё фильтры"}
        onClick={() => toggleShowOther(s => !s)}
      >
        {showOther ? "свернуть" : "показать ещё фильтры"}
      </ShowOtherFilters>
    </>
  );
};

export default Filter;
