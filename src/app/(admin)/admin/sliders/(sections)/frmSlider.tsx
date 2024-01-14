/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import { UploadImage } from "@/components";
import { Button, Input, Spinner } from "@nextui-org/react";
import { useFilterFromUrl, useDataSlider, useSliders } from "@/hooks";
import { IconCircleCheck } from "@tabler/icons-react";
import { useFunctionsSliders } from "@/providers";

export const FrmSlider = () => {
  const { getParams, updateFilter } = useFilterFromUrl();
  const { getSliderById, slider } = useDataSlider();
  const { addSlider, updateSlider, uploadImage, loading, message } =
    useFunctionsSliders();
  
    const [frmSlider, setFrmSlider] = useState({
    name: "",
    tag: "",
    image: "",
    isActive: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const id = getParams("edit", "");

  useEffect(() => {
    if (id) {
      getSliderById(id);
    }
  }, [id]);

  useEffect(() => {
    if (slider) {
      setFrmSlider({
        name: slider.name,
        tag: slider.tag,
        isActive: slider.isActive,
        image: slider.image,
        createdAt: slider?.createdAt,
        updatedAt: slider?.updatedAt,
      });
    }
  }, [slider]);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        handleCancel();
      }, 1000);
    }
  }, [message]);

  const handleCancel = () => {
    if (id) {
      updateFilter("edit", "");
    }
    setFrmSlider({
      name: "",
      tag: "",
      image: "",
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  };

  const handleUpdateOrAdd = async () => {
    if (id) {
      updateSlider(frmSlider, id);
    } else {
      addSlider(frmSlider);
    }
  };

  const handleUploadImage = async (image: File) => {
    const urlImage = await uploadImage(image);
    await setFrmSlider({ ...frmSlider, image: urlImage });
    if (id) {
      updateSlider({ ...frmSlider, image: urlImage }, id);
      await getSliderById(id);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h1 className="text-sm font-medium text-zinc-500">
          {id ? "Editar" : "Agregar"} slider
        </h1>
        {id && (
          <h3 className="text-xs">
            Ultima modificación:{" "}
            {new Intl.DateTimeFormat("es-ES").format(frmSlider.updatedAt)}
          </h3>
        )}
      </div>
      {loading && (
        <div className="flex gap-2 py-2 items-center">
          <Spinner />
          <h3 className="mb-2">
            {
              <span className="animate-pulse">
                {id ? "Actualizando" : "Agregando"} producto...
              </span>
            }
          </h3>
        </div>
      )}
      {message && (
        <div className="flex gap-2 p-2 mb-4  items-center bg-green-100">
          <div className="text-green-500">
            <IconCircleCheck size={24} />
          </div>
          <h3>{message}</h3>
        </div>
      )}
      <div className="space-y-3">
        <Input
          label="Nombre"
          placeholder="Escribe el nombre"
          value={frmSlider.name}
          disabled={loading}
          onChange={(e) => {
            setFrmSlider({
              ...frmSlider,
              name: e.target.value,
            });
          }}
        />
        <Input
          placeholder="Tag"
          label="Escribe una etiqueta"
          value={frmSlider.tag}
          disabled={loading}
          onChange={(e) => {
            setFrmSlider({
              ...frmSlider,
              tag: e.target.value,
            });
          }}
        />
        <div className="flex items-center gap-2">
          <Button
            color="primary"
            onClick={() => {
              handleUpdateOrAdd();
            }}
          >
            {id ? "Actualizar" : "Agregar"}
          </Button>
          <Button
            color="danger"
            variant="ghost"
            onClick={() => {
              handleCancel();
            }}
          >
            Cancelar
          </Button>
        </div>
      </div>
      {id && (
        <div className="space-y-4">
          <h1 className="text-sm font-medium text-zinc-500">Agregar imagen</h1>
          <div className="flex justify-center">
            <UploadImage
              onImageUpload={(image) => {
                handleUploadImage(image);
              }}
              dataImage={frmSlider.image}
              loading={loading}
            />
          </div>
        </div>
      )}
    </div>
  );
};
