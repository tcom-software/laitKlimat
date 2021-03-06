import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import {
  InputFromTo,
  InputCheckbox,
  InputCheckboxImage,
  InputCheckboxImageSearch,
} from "@molecules";
import { Loading } from "@atoms";
import { getLoader } from "@redux/selectors/loader";
import { addFiltersDataCache } from "@redux/actions/filtersData";
import { Container, OtherFilters, ShowOtherFilters } from "./styles";
import { serialezeFiltersDataKey } from "@redux/reducers/filtersData";
import { getFiltersDataCacheByKey } from "@redux/selectors/filtersData";

import { FilterService } from "./FilterService";
import { filterSearchParams } from "helper/filterSearchParams";
import { UPLOADS_URL } from "constants/api";

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
  const [filtersByFilters, setFiltersByFilters] = useState(null);
  const serializedKey = serialezeFiltersDataKey(router.query.c);
  const filtersData = useSelector(getFiltersDataCacheByKey(serializedKey));

  useEffect(() => {
    setLoading(true);
    (async () => {
      if (!filtersData) {
        const {
          textFilters,
          manufacturerCountries,
          characteristicAttributes,
        } = await FilterService.getFilters({
          body: {},
          page: router.query.page,
          category: router.query.c,
        });

        dispatch(
          addFiltersDataCache(router.query.c, {
            textFilters,
            manufacturerCountries,
            data: characteristicAttributes, // --- other filters
          })
        );
      }
      setLoading(false);
    })();
  }, [router.query.c /* category */]);

  useEffect(() => {
    (async () => {
      const searchParams = filterSearchParams(router);
      const data = await FilterService.getFilters(searchParams);
      setFiltersByFilters(data);
    })();
  }, [router.query]);

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

  // filters after filter
  const { characteristicAttributes: f_data, textFilters: f_textFilters } =
    filtersByFilters || {};
  const f_inverter = f_data?.[FILTERS_ID.main.inverter];
  const f_classEnergy = f_data?.[FILTERS_ID.main.classEnergy];
  const f_servicedArea = f_data?.[FILTERS_ID.main.servicedArea];
  const f_brandCountry = f_data?.[FILTERS_ID.main.brandCountry];
  const f_coolingHeating = f_data?.[FILTERS_ID.main.coolingHeating];
  const f_ventilationMode = f_data?.[FILTERS_ID.main.ventilationMode];
  const f_manufacturerCountry = f_data?.[FILTERS_ID.main.manufacturerCountry];
  const f_numberOfPluginUnits = f_data?.[FILTERS_ID.main.numberOfPluginUnits];

  return (
    <>
      <Container>
        <div className="column column-one">
          <InputFromTo title="????????" inputName="price" />
          {numberOfPluginUnits && (
            <InputCheckbox
              loading={loading}
              data={numberOfPluginUnits}
              f_data={f_numberOfPluginUnits}
            />
          )}
          <InputCheckboxImageSearch
            loading={loading}
            title="??????????????????????????"
            inputName="manufacturerCountries"
            checkboxes={manufacturerCountries}
          />
        </div>
        <div className="column column-two">
          <InputCheckbox
            loading={loading}
            data={servicedArea}
            f_data={f_servicedArea}
          />
          <InputCheckbox
            data={inverter}
            loading={loading}
            f_data={f_inverter}
          />
          {/* 
            ???? ?????????????? ???? -30 ???? 
            ???? ???????????????????? ???? -40 ????  
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
                    f_data={{
                      id: f_data?.[id]?.id,
                      values: [
                        {
                          ...(f_data?.[id]?.values[0] ?? {}),
                          label: f_data?.[id]?.title,
                        },
                      ],
                    }}
                  />
                ))}
            </div>
          )}
          <InputCheckbox
            loading={loading}
            data={ventilationMode}
            f_data={f_ventilationMode}
          />
        </div>
        <div className="column column-three">
          <InputCheckbox
            loading={loading}
            data={classEnergy}
            f_data={f_classEnergy}
          />
          {textFilters &&
            !(textFilters instanceof Array) &&
            Object.values(textFilters).reduce((acc, filter) => {
              const { filters, type, title, id } = filter;
              if (type === "group") {
                return [
                  ...acc,
                  ...filters.map(({ title: childTitle, id: childId }) => (
                    <InputFromTo
                      key={childId}
                      title={childTitle}
                      loading={loading}
                      inputName={`range${childId}`}
                      isActive={Object.values(f_textFilters ?? {})
                        ?.find(({ title: _t }) => _t === title)
                        ?.filters.some(({ id: _id }) => _id === childId)}
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
                  isActive={Object.values(f_textFilters ?? {}).some(
                    ({ id: _id }) => _id === id
                  )}
                />,
              ];
            }, [])}
        </div>
        <div className="column column-four">
          <InputCheckboxImage
            loading={loading}
            data={manufacturerCountry}
            f_data={f_manufacturerCountry}
          />
          <InputCheckboxImage
            loading={loading}
            data={brandCountry}
            f_data={f_brandCountry}
          />
        </div>
      </Container>

      {showOther && data && (
        <OtherFilters>
          {Object.values(FILTERS_ID.other)
            // --- leave only the necessary ones
            .filter(id => data[id])
            .map(id => (
              <InputCheckbox
                key={id}
                data={data[id]}
                loading={loading}
                f_data={f_data[id]}
              />
            ))}
        </OtherFilters>
      )}

      <ShowOtherFilters
        type="button"
        className="show-other-filters"
        aria-label={showOther ? "????????????????" : "???????????????? ?????? ??????????????"}
        onClick={() => toggleShowOther(s => !s)}
      >
        {showOther ? "????????????????" : "???????????????? ?????? ??????????????"}
      </ShowOtherFilters>
    </>
  );
};

export const FilterForSearch = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [brands, setBrands] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const { brands } = await FilterService.getBrands();
      const serializedBrands = brands.map(
        ({ brand, brand_logo, id, product_count }) => ({
          value: id,
          label: brand,
          count: product_count,
          image: `${UPLOADS_URL}/manufacturer_logo/size150/${brand_logo}`,
        })
      );
      setBrands(serializedBrands);
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <div className="column column-one">
        <InputFromTo title="????????" inputName="price" />
        <InputCheckboxImageSearch
          loading={loading}
          checkboxes={brands}
          title="??????????????????????????"
          inputName="manufacturerCountries"
        />
      </div>
    </Container>
  );
};

export default Filter;
